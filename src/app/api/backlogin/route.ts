// Importamos las herramientas necesarias
import { NextResponse, NextRequest } from "next/server"; // Manejo de solicitudes y respuestas en rutas API de Next.js
import { conn } from '@/libs/PostgDB'; // Conexión a la base de datos PostgreSQL
import jwt from 'jsonwebtoken'; // Librería para crear y verificar tokens JWT

// Controlador para manejar el inicio de sesión (método POST)
export async function POST(request: NextRequest) {
  try {
    // Leer y parsear los datos enviados desde el frontend en formato JSON
    const { email, password } = await request.json();

    // Validar que los campos obligatorios no estén vacíos
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false, // Indica que la solicitud falló
          status: 400, // Código de estado HTTP 400 (Bad Request)
          message: "El correo y la contraseña son obligatorios", // Mensaje descriptivo del error
          data: null, // No hay datos adicionales
          timestamp: Date.now(), // Marca de tiempo
          api: "api/backlogin", // Identificación del endpoint
          method: "POST", // Método HTTP utilizado
        },
        { status: 400 } // Código de estado HTTP para la respuesta
      );
    }

    // Query SQL para verificar las credenciales del usuario
    const query = `
      SELECT email, first_name, last_names
      FROM users 
      WHERE email = $1 AND password = $2
    `;
    const values = [email, password]; // Valores que se inyectarán en la consulta

    // Ejecutar la consulta en la base de datos
    const responseDB = await conn.query(query, values);

    // Verificar si el usuario existe (es decir, si las credenciales son válidas)
    if (responseDB.rows.length === 0) {
      return NextResponse.json(
        {
          success: false, // Indica que la solicitud falló
          status: 401, // Código de estado HTTP 401 (No autorizado)
          message: "Correo o contraseña incorrectos", // Mensaje descriptivo del error
          data: null, // No hay datos adicionales
          timestamp: Date.now(), // Marca de tiempo
          api: "api/backlogin", // Identificación del endpoint
          method: "POST", // Método HTTP utilizado
        },
        { status: 401 } // Código de estado HTTP para la respuesta
      );
    }

    // Extraer los datos del usuario encontrado en la base de datos
    const user = responseDB.rows[0];

    // Generar un token único (JWT) con los datos del usuario
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), // Tiempo de expiración del token (24 horas)
        name: user['first_name'], // Nombre del usuario
        email: user['email'], // Correo electrónico del usuario
        last_names: user['last_names'], // Apellidos del usuario
      },
      'secretkey' // Clave secreta para firmar el token
    );

    // Crear la respuesta exitosa en formato JSON
    const response = NextResponse.json(
      {
        success: true, // Indica que la solicitud fue exitosa
        status: 200, // Código de estado HTTP 200 (OK)
        message: "Inicio de sesión exitoso", // Mensaje descriptivo
        data: user, // Datos del usuario retornados al frontend
        timestamp: Date.now(), // Marca de tiempo
        api: "api/backlogin", // Identificación del endpoint
        method: "POST", // Método HTTP utilizado
      },
      { status: 200 } // Código de estado HTTP para la respuesta
    );

    // Adjuntar el token generado como una cookie HTTP
    response.cookies.set('token', token, {
      httpOnly: true, // La cookie no será accesible desde JavaScript en el navegador
      sameSite: 'strict', // Restringe el envío de la cookie a solicitudes del mismo sitio
      maxAge: 60 * 60 * 24, // Duración de la cookie (24 horas)
      path: '/', // Aplica la cookie a toda la aplicación
    });

    // Retornar la respuesta al cliente
    return response;

  } catch (error) {
    // Manejo de errores, registrando el error en el servidor y devolviendo una respuesta con el detalle del error
    console.error("Error en el backend:", error);

    return NextResponse.json(
      {
        success: false, // Indica que la solicitud falló
        status: 500, // Código de estado HTTP 500 (Error interno del servidor)
        message: "Error al procesar el inicio de sesión", // Mensaje descriptivo del error
        error: error instanceof Error ? error.message : "Error desconocido al iniciar sesión", // Detalle del error
        timestamp: Date.now(), // Marca de tiempo
        api: "api/backlogin", // Identificación del endpoint
        method: "POST", // Método HTTP utilizado
      },
      { status: 500 } // Código de estado HTTP para la respuesta
    );
  }
}
