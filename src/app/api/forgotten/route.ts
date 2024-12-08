import { NextResponse, NextRequest } from "next/server";
import { conn } from '@/libs/PostgDB';
import { setUserEmail } from '@/libs/sharedData';

// Recuperar contraseña olvidada
export async function POST(request: NextRequest) {
  try {
    // Leer los datos enviados desde el frontend
    const { email } = await request.json();

    // Validación de campos obligatorios
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "El correo es obligatorio",
          data: null,
          timestamp: Date.now(),
          api: "api/forgotten",
          method: "POST",
        },
        { status: 400 }
      );
    }

    console.log(email);

    // Query para verificar el correo
    const query = `
      SELECT email
      FROM users 
      WHERE email = $1
    `;
    const values = [email];

    // Consultar la base de datos
    const responseDB = await conn.query(query, values);

    // Verificar si las credenciales son válidas
    if (responseDB.rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          status: 401,
          message: "Correo no registrado",
          data: null,
          timestamp: Date.now(),
          api: "api/forgotten",
          method: "POST",
        },
        { status: 401 }
      );
    }

    // Extraer los datos del usuario encontrado
    const user = responseDB.rows[0];

    setUserEmail(user.email);

    //console.log(user)
    console.log(`Correo ${user.email} guardado en sharedData`);
  
    // Crear la respuesta
    const response = NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Identificación de correo exitoso",
        data: user,
        timestamp: Date.now(),
        api: "api/forgotten",
        method: "POST",
      },
      { status: 200 }
    );

    // Devolver la respuesta
    return response;

  } catch (error) {
    console.error("Error en el backend:", error);

    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error al procesar la identificación de la cuenta",
        error: error instanceof Error ? error.message : "Error desconocido al identificar la cuenta",
        timestamp: Date.now(),
        api: "api/forgotten",
        method: "POST",
      },
      { status: 500 }
    );
  }
}