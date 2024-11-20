import { NextResponse, NextRequest } from "next/server";
import { conn } from '@/libs/PostgDB';

export async function POST(request: NextRequest) {
  try {
    // Leer los datos enviados desde el frontend
    const { email, password } = await request.json();

    // Validación de campos obligatorios
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "El correo y la contraseña son obligatorios",
          data: null,
          timestamp: Date.now(),
          api: "api/backlogin",
          method: "POST",
        },
        { status: 400 }
      );
    }

    // Query para verificar las credenciales
    const query = `
      SELECT email 
      FROM users 
      WHERE email = $1 AND password = $2
    `;
    const values = [email, password];

    // Consultar la base de datos
    const responseDB = await conn.query(query, values);

    // Verificar si las credenciales son válidas
    if (responseDB.rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          status: 401,
          message: "Correo o contraseña incorrectos",
          data: null,
          timestamp: Date.now(),
          api: "api/backlogin",
          method: "POST",
        },
        { status: 401 }
      );
    }

    // Extraer los datos del usuario encontrado
    const user = responseDB.rows[0];

    // Responder con los datos del usuario
    return NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Inicio de sesión exitoso",
        data: user, // Retorna solo el email del usuario
        timestamp: Date.now(),
        api: "api/backlogin",
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
        message: "Error al procesar el inicio de sesión",
        error: error instanceof Error ? error.message : "Error desconocido al iniciar sesión",
        timestamp: Date.now(),
        api: "api/backlogin",
        method: "POST",
      },
      { status: 500 }
    );
  }
}
