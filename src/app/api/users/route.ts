import { NextResponse, NextRequest } from "next/server";
import { conn } from '@/libs/PostgDB';
import {verify} from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    //console.log("Data:", data);

    const { firstName, lastName, email, password, category } = data;

    // Validación de campos obligatorios
    if (!firstName || !lastName || !email || !password || !category) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "Todos los campos son obligatorios",
          data: null,
          timestamp: Date.now(),
          api: "api/users",
          method: "POST",
        },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO users (first_name, last_names, email, password, category) 
      VALUES ($1, $2, $3, $4, $5)
      RETURNING first_name, last_names, email, category
    `;
    const values = [firstName, lastName, email, password, category];

    const responseDB = await conn.query(query, values);

    console.log(responseDB);

    return NextResponse.json(
      {
        success: true,
        status: 201, 
        message: "Usuario creado en la base de datos",
        data: responseDB.rows[0], 
        timestamp: Date.now(),
        api: "api/users",
        method: "POST",
      },
      { status: 201 }
    );
  } catch (error) {
    //console.error("Error al crear el usuario:", error);

    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error al enviar datos a la base de datos",
        error: error instanceof Error ? error.message : "Error desconocido al intentar crear el usuario",
        timestamp: Date.now(),
        path: "api/users",
        method: "POST",
      },
      { status: 500 }
    );
  }
}


export async function GET(request: NextRequest) {
  try {

    //Dame la forma correcta de obtener mi cookie de los headers
    const cookies = request.cookies.get('token')
    const token = cookies['value']
    
    const data = verify(token, 'secretkey') //Obteniendo los datos del token
    console.log(data)

    return NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Datos Cargados",
        data: { users: 'Name' },
        timestamp: Date.now(),
        api: "api/users",
        method: "GET",
      },
      { status: 200 }
    );

  }catch {

  }
}
