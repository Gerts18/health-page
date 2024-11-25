import { NextResponse, NextRequest } from "next/server";
import { conn } from '@/libs/PostgDB';

// Obtener todos los artículos de la base de datos
export async function GET(request: NextRequest) {
  try {
    const query = 'SELECT id, title, description, image_url FROM articles';
    const responseDB = await conn.query(query);

    return NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Artículos obtenidos de la base de datos",
        data: responseDB.rows,
        timestamp: Date.now(),
        api: "api/articles",
        method: "GET",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error al obtener datos de la base de datos",
        error: error instanceof Error ? error.message : "Error desconocido al intentar obtener los artículos",
        timestamp: Date.now(),
        path: "api/articles",
        method: "GET",
      },
      { status: 500 }
    );
  }
}

// Agregar un nuevo artículo a la base de datos
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { title, description, image_url } = data;

    // Validación de campos obligatorios
    if (!title || !description || !image_url) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "Todos los campos son obligatorios",
          data: null,
          timestamp: Date.now(),
          api: "api/articles",
          method: "POST",
        },
        { status: 400 }
      );
    }

    const query = `
      INSERT INTO articles (title, description, image_url)
      VALUES ($1, $2, $3)
      RETURNING title, description, image_url
    `;
    const values = [title, description, image_url];

    const responseDB = await conn.query(query, values);

    console.log(responseDB);

    return NextResponse.json(
      {
        success: true,
        status: 201,
        message: "Artículo creado en la base de datos",
        data: responseDB.rows[0],
        timestamp: Date.now(),
        api: "api/articles",
        method: "POST",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error al enviar datos a la base de datos",
        error: error instanceof Error ? error.message : "Error desconocido al intentar crear el artículo",
        timestamp: Date.now(),
        path: "api/articles",
        method: "POST",
      },
      { status: 500 }
    );
  }
}
