import { NextResponse, NextRequest } from "next/server";
import { conn } from '@/libs/PostgDB';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { firstName, lastName, email, password, category, professionalId } = data;

    console.log('Data:', data);
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
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING first_name, last_names, email, category, professionalid
      `;
      values = [firstName, lastName, email, password, category, "none"];
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

// Agregar el nuevo método PUT para actualizar datos del usuario
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { email, firstName, lastName, password, updateType } = data;

    // Validación del email que es obligatorio para cualquier actualización
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "El email es obligatorio para actualizar datos",
          data: null,
          timestamp: Date.now(),
          api: "api/users",
          method: "PUT",
        },
        { status: 400 }
      );
    }

    let query;
    let values;
    let responseDB;

    // Actualización de nombre y apellido
    if (updateType === 'personalInfo' && firstName && lastName) {
      query = `
        UPDATE users 
        SET first_name = $1, last_names = $2
        WHERE email = $3
        RETURNING first_name, last_names, email
      `;
      values = [firstName, lastName, email];
    } 
    // Actualización de contraseña
    else if (updateType === 'password' && password) {
      query = `
        UPDATE users 
        SET password = $1
        WHERE email = $2
        RETURNING email
      `;
      values = [password, email];
    } else {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "Datos de actualización inválidos o incompletos",
          data: null,
          timestamp: Date.now(),
          api: "api/users",
          method: "PUT",
        },
        { status: 400 }
      );
    }

    responseDB = await conn.query(query, values);

    if (responseDB.rowCount === 0) {
      return NextResponse.json(
        {
          success: false,
          status: 404,
          message: "Usuario no encontrado",
          data: null,
          timestamp: Date.now(),
          api: "api/users",
          method: "PUT",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Usuario actualizado correctamente",
        data: responseDB.rows[0],
        timestamp: Date.now(),
        api: "api/users",
        method: "PUT",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error al actualizar datos del usuario",
        error: error instanceof Error ? error.message : "Error desconocido",
        timestamp: Date.now(),
        path: "api/users",
        method: "PUT",
      },
      { status: 500 }
    );
  }
}