// Importamos herramientas necesarias
import { NextResponse, NextRequest } from "next/server"; // Manejo de solicitudes y respuestas en rutas API de Next.js
import { conn } from '@/libs/PostgDB'; // Conexión a la base de datos PostgreSQL

// Controlador para agregar un nuevo usuario a la base de datos (método POST)
export async function POST(request: NextRequest) {
  try {
    // Extraer datos enviados en el cuerpo de la solicitud en formato JSON
    const data = await request.json();

    // Desestructuramos los datos enviados por el cliente
    const { firstName, lastName, email, password, category } = data;

    // Validar que todos los campos requeridos estén presentes
    if (!firstName || !lastName || !email || !password || !category) {
      return NextResponse.json(
        {
          success: false, // Indica que la solicitud falló
          status: 400, // Código de estado HTTP 400 (Bad Request)
          message: "Todos los campos son obligatorios", // Mensaje descriptivo del error
          data: null, // No hay datos adicionales
          timestamp: Date.now(), // Marca de tiempo
          api: "api/users", // Identificación del endpoint
          method: "POST", // Método HTTP utilizado
        },
        { status: 400 } // Código de estado HTTP para la respuesta
      );
    }

    // Query SQL para insertar un nuevo usuario en la base de datos
    const query = `
      INSERT INTO users (first_name, last_names, email, password, category) 
      VALUES ($1, $2, $3, $4, $5)
      RETURNING first_name, last_names, email, category
    `;
    // Valores que se inyectarán en la consulta
    const values = [firstName, lastName, email, password, category];

    // Ejecutar la consulta en la base de datos
    const responseDB = await conn.query(query, values);

    // Retornar respuesta exitosa con los datos del usuario creado
    return NextResponse.json(
      {
        success: true, // Indica que la solicitud fue exitosa
        status: 201, // Código de estado HTTP 201 (Created)
        message: "Usuario creado en la base de datos", // Mensaje descriptivo
        data: responseDB.rows[0], // Retornamos los datos del usuario creado
        timestamp: Date.now(), // Marca de tiempo
        api: "api/users", // Identificación del endpoint
        method: "POST", // Método HTTP utilizado
      },
      { status: 201 } // Código de estado HTTP para la respuesta
    );
  } catch (error) {
    //console.error("Error al crear el usuario:", error);

    return NextResponse.json(
      {
        success: false, // Indica que la solicitud falló
        status: 500, // Código de estado HTTP 500 (Error interno del servidor)
        message: "Error al enviar datos a la base de datos", // Mensaje descriptivo del error
        error: error instanceof Error ? error.message : "Error desconocido al intentar crear el usuario", // Detalle del error
        timestamp: Date.now(), // Marca de tiempo
        path: "api/users", // Identificación del endpoint
        method: "POST", // Método HTTP utilizado
      },
      { status: 500 } // Código de estado HTTP para la respuesta
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


