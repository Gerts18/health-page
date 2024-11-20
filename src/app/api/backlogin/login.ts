import { NextResponse, NextRequest } from "next/server";
import { conn } from "@/libs/PostgDB";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log("Datos recibidos:", data);

    const { email, password } = data;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "Correo electrónico y contraseña son obligatorios",
        },
        { status: 400 }
      );
    }

    const query = "SELECT email, password FROM users WHERE email = $1";
    const values = [email];
    console.log("Consulta SQL:", query, values);

    const responseDB = await conn.query(query, values);
    console.log("Respuesta de la base de datos:", responseDB);

    if (responseDB.rowCount === 0) {
      return NextResponse.json(
        {
          success: false,
          status: 401,
          message: "Correo electrónico o contraseña incorrectos",
        },
        { status: 401 }
      );
    }

    const user = responseDB.rows[0];
    console.log("Usuario encontrado:", user);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        {
          success: false,
          status: 401,
          message: "Correo electrónico o contraseña incorrectos",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Login exitoso",
        data: { email: user.email },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el backend:", error);

    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error interno en el servidor",
        error: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 }
    );
  }
}
