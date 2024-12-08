import { NextResponse, NextRequest } from "next/server";
import { conn } from '@/libs/PostgDB';
import { getUserEmail } from '@/libs/sharedData';

// Recuperar contraseña olvidada
export async function POST(request: NextRequest) {
  try {
    // Leer los datos enviados desde el frontend
    const { password, passwordTwo } = await request.json();
    console.log(password, passwordTwo);

    // Validación de campos obligatorios
    if (!password || !passwordTwo) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "La contraseña es obligatoria",
          data: null,
          timestamp: Date.now(),
          api: "api/recovery",
          method: "POST",
        },
        { status: 400 }
      );
    }

    console.log(password);
    console.log(passwordTwo);

    //Verificar que las contraseñas sean iguales
    if(password != passwordTwo){
        return NextResponse.json(
            {
                success: false,
                status: 401,
                message: "Las constraseñas son diferentes",
                data: null,
                timestamp: Date.now(),
                api: "api/recovery",
                method: "POST",
            },
            { status: 401 }
        );
    }

    // Validación de complejidad de la contraseña
    if (password.length < 6) {
        return NextResponse.json(
          {
            success: false,
            status: 400,
            message: "La contraseña debe tener al menos 6 caracteres",
            data: null,
            timestamp: Date.now(),
            api: "api/recovery",
            method: "POST",
          },
          { status: 400 }
        );
      }

      //Recuperar el correo almacenado previamente 
      const email = getUserEmail();
      if (!email) {
        return NextResponse.json(
          {
            success: false,
            status: 400,
            message: "Error al almacenar el correo del usuario",
            data: null,
            timestamp: Date.now(),
            api: "api/recovery",
            method: "POST",
          },
          { status: 400 }
        );
      }

    // Query para insertar la nueva contraseña
    const query = `
      UPDATE users
      SET password = $1 
      WHERE email = $2
    `;
    const values = [password, email];

    // Consultar la base de datos
    const responseDB = await conn.query(query, values);

    //Respuesta de fallo al actualizar la contraseña
    if (responseDB.rowCount === 0) {
        return NextResponse.json(
          {
            success: false,
            status: 404,
            message: "Error al actualizar la contraseña",
            data: null,
            timestamp: Date.now(),
            api: "api/recovery",
            method: "POST",
          },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          status: 200,
          message: "Contraseña actualizada exitosamente",
          data: null,
          timestamp: Date.now(),
          api: "api/recovery",
          method: "POST",
        },
        { status: 200 }
      );

  } catch (error) {
    console.error("Error en el backend:", error);

    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error al actualizar la contraseña",
        error: error instanceof Error ? error.message : "Error desconocido al actualizar la contraseña",
        timestamp: Date.now(),
        api: "api/recovery",
        method: "POST",
      },
      { status: 500 }
    );
  }
}