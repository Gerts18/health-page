// Importación de módulos necesarios desde Next.js y la conexión a la base de datos
import { NextResponse, NextRequest } from "next/server"; // Manejo de respuestas y solicitudes en Next.js
import { conn } from '@/libs/PostgDB'; // Conexión a la base de datos PostgreSQL

/**
 * Maneja las solicitudes HTTP POST a esta API.
 * Este método se utiliza para crear un nuevo usuario en la base de datos.
 */
export async function POST(request: NextRequest) {
  try {
    // Extrae los datos enviados en el cuerpo de la solicitud en formato JSON
    const data = await request.json();

    // Desestructura los campos necesarios del objeto de datos
    const { firstName, lastName, email, password, category, professionalId } = data;

    // Imprime los datos recibidos en la consola para depuración
    console.log('Data:', data);

    // Validación de campos obligatorios
    // Verifica que todos los campos requeridos estén presentes y no sean nulos o vacíos
    if (!firstName || !lastName || !email || !password || !category) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "Todos los campos son obligatorios", // Mensaje indicando que faltan campos
          data: null,
          timestamp: Date.now(), // Marca de tiempo actual
          api: "api/users", // Ruta de la API
          method: "POST", // Método HTTP utilizado
        },
        { status: 400 } // Código de estado HTTP 400 (Solicitud incorrecta)
      );
    }

    // Validación adicional para la categoría 'Doctor' (asumido como '2')
    // Si la categoría es '2', el campo 'professionalId' es obligatorio
    if (category === '2' && (!professionalId || professionalId.trim() === '')) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "El campo 'Cedula Profesional' es obligatorio para la categoría Doctor", // Mensaje específico
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

    // Construcción de la consulta SQL y los valores a insertar según la categoría
    if (category === '2') {
      // Si la categoría es 'Doctor', incluye 'professionalId' en la inserción
      query = `
        INSERT INTO users (first_name, last_names, email, password, category, professionalid) 
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING first_name, last_names, email, category, professionalid
      `;
      values = [firstName, lastName, email, password, category, professionalId];
    } else {
      // Para otras categorías, establece 'professionalid' como 'none'
      query = `
        INSERT INTO users (first_name, last_names, email, password, category, professionalid) 
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING first_name, last_names, email, category, professionalid
      `;
      values = [firstName, lastName, email, password, category, "none"];
    }

    // Ejecuta la consulta SQL con los valores proporcionados
    const responseDB = await conn.query(query, values);

    // Responde al cliente con los datos del usuario creado
    return NextResponse.json(
      {
        success: true,
        status: 201,
        message: "Usuario creado en la base de datos", // Mensaje de éxito
        data: responseDB.rows[0], // Datos del usuario recién creado
        timestamp: Date.now(),
        api: "api/users",
        method: "POST",
      },
      { status: 201 } // Código de estado HTTP 201 (Creado)
    );
  } catch (error) {
    // Manejo de errores durante el proceso de creación del usuario
    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error al enviar datos a la base de datos", // Mensaje de error general
        error: error instanceof Error ? error.message : "Error desconocido al intentar crear el usuario", // Mensaje de error específico si está disponible
        timestamp: Date.now(),
        path: "api/users",
        method: "POST",
      },
      { status: 500 } // Código de estado HTTP 500 (Error interno del servidor)
    );
  }
}

/**
 * Maneja las solicitudes HTTP PUT a esta API.
 * Este método se utiliza para actualizar datos de un usuario existente en la base de datos.
 */
export async function PUT(request: NextRequest) {
  try {
    // Extrae los datos enviados en el cuerpo de la solicitud en formato JSON
    const data = await request.json();
    // Desestructura los campos necesarios del objeto de datos
    const { email, firstName, lastName, password, updateType } = data;

    // Validación del email que es obligatorio para cualquier actualización
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "El email es obligatorio para actualizar datos", // Mensaje indicando que falta el email
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

    // Determina el tipo de actualización a realizar según 'updateType'
    if (updateType === 'personalInfo' && firstName && lastName) {
      // Actualización de nombre y apellido
      query = `
        UPDATE users 
        SET first_name = $1, last_names = $2
        WHERE email = $3
        RETURNING first_name, last_names, email
      `;
      values = [firstName, lastName, email];
    } else if (updateType === 'password' && password) {
      // Actualización de contraseña
      query = `
        UPDATE users 
        SET password = $1
        WHERE email = $2
        RETURNING email
      `;
      values = [password, email];
    } else {
      // Si el tipo de actualización no es válido o faltan datos necesarios
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "Datos de actualización inválidos o incompletos", // Mensaje de error específico
          data: null,
          timestamp: Date.now(),
          api: "api/users",
          method: "PUT",
        },
        { status: 400 }
      );
    }

    // Ejecuta la consulta SQL con los valores proporcionados
    const responseDB = await conn.query(query, values);

    // Verifica si se encontró y actualizó al menos un registro
    if (responseDB.rowCount === 0) {
      return NextResponse.json(
        {
          success: false,
          status: 404,
          message: "Usuario no encontrado", // Mensaje indicando que el usuario no existe
          data: null,
          timestamp: Date.now(),
          api: "api/users",
          method: "PUT",
        },
        { status: 404 } // Código de estado HTTP 404 (No encontrado)
      );
    }

    // Responde al cliente con los datos actualizados del usuario
    return NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Usuario actualizado correctamente", // Mensaje de éxito
        data: responseDB.rows[0], // Datos del usuario actualizado
        timestamp: Date.now(),
        api: "api/users",
        method: "PUT",
      },
      { status: 200 } // Código de estado HTTP 200 (OK)
    );
  } catch (error) {
    // Manejo de errores durante el proceso de actualización del usuario
    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error al actualizar datos del usuario", // Mensaje de error general
        error: error instanceof Error ? error.message : "Error desconocido", // Mensaje de error específico si está disponible
        timestamp: Date.now(),
        path: "api/users",
        method: "PUT",
      },
      { status: 500 } // Código de estado HTTP 500 (Error interno del servidor)
    );
  }
}
