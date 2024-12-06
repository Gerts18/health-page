import { NextResponse, NextRequest } from "next/server";
import { conn } from '@/libs/PostgDB';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { firstName, lastName, email, password, category, professionalId } = data;

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

    // Si la categoría es Doctor (2), necesitamos professionalId
    if (category === '2' && (!professionalId || professionalId.trim() === '')) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "El campo 'Cedula Profesional' es obligatorio para la categoría Doctor",
          data: null,
          timestamp: Date.now(),
          api: "api/users",
          method: "POST",
        },
        { status: 400 }
      );
    }

    let query;
    let values;

    if (category === '2') {
      // Si es Doctor
      query = `
        INSERT INTO users (first_name, last_names, email, password, category, professionalid) 
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING first_name, last_names, email, category, professionalid
      `;
      values = [firstName, lastName, email, password, category, professionalId];
    } else {
      // Otras categorías
      query = `
        INSERT INTO users (first_name, last_names, email, password, category, professionalid) 
        VALUES ($1, $2, $3, $4, $5, "")
        RETURNING first_name, last_names, email, category, professionalid
      `;
      values = [firstName, lastName, email, password, category];
    }

    const responseDB = await conn.query(query, values);

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
