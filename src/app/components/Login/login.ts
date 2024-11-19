import { NextResponse, NextRequest } from "next/server";
import { conn } from "@/libs/PostgDB";
import bcrypt from "bcryptjs"; // Para comparar contraseñas

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { email, password } = data;

    // Verificar que se reciban todos los campos
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "Correo electrónico y contraseña son obligatorios",
          data: null,
          timestamp: new Date().getTime(),
          api: "api/login",
          method: "POST",
        },
        { status: 400 }
      );
    }

    // Buscar el usuario en la base de datos
    const query = "SELECT id, email, password FROM users WHERE email = $1";
    const values = [email];

    const responseDB = await conn.query(query, values);

    if (responseDB.rowCount === 0) {
      // Usuario no encontrado
      return NextResponse.json(
        {
          success: false,
          status: 401,
          message: "Correo electrónico o contraseña incorrectos",
          data: null,
          timestamp: new Date().getTime(),
          api: "api/login",
          method: "POST",
        },
        { status: 401 }
      );
    }

    const user = responseDB.rows[0];

    // Comparar la contraseña proporcionada con la almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // Contraseña incorrecta
      return NextResponse.json(
        {
          success: false,
          status: 401,
          message: "Correo electrónico o contraseña incorrectos",
          data: null,
          timestamp: new Date().getTime(),
          api: "api/login",
          method: "POST",
        },
        { status: 401 }
      );
    }

    // Login exitoso
    return NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Login exitoso",
        data: { userId: user.id, email: user.email },
        timestamp: new Date().getTime(),
        api: "api/login",
        method: "POST",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error en el servidor al procesar la solicitud",
        error: error instanceof Error ? error.message : "Error desconocido",
        timestamp: new Date().getTime(),
        path: "api/login",
        method: "POST",
      },
      { status: 500 }
    );
  }
}