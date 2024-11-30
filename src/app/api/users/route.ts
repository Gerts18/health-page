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


