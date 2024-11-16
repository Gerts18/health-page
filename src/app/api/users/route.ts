import { NextResponse, NextRequest } from "next/server";
import { conn } from '@/libs/PostgDB';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, email, phone, password, securityQuestion } = data;

    if (!name || !email || !phone || !password || !securityQuestion) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "Todos los campos son obligatorios",
          data: null,
          timestamp: new Date().getTime(),
          api: "api/users",
          method: "POST",
        },
        { status: 400 }
      );
    }

    const query = 'INSERT INTO users (name, email, phone, password, securityquestion) VALUES ($1, $2, $3, $4, $5)';
    const values = [name, email, phone, password, securityQuestion];

    const responseDB = await conn.query(query, values);

    console.log(responseDB);

    return NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Usuario creado en la base de datos",
        data: null,
        timestamp: new Date().getTime(),
        api: "api/users",
        method: "POST",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error al enviar datos a la base de datos",
        error: error instanceof Error ? error.message : "Error al intentar crear el usuario",
        timestamp: new Date().getTime(),
        path: "api/users",
        method: "POST",
      },
      { status: 500 }
    );
  }
}
