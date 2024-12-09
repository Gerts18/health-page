// Importación de módulos necesarios desde Next.js y otras librerías
import { NextResponse, NextRequest } from "next/server"; // Manejo de respuestas y solicitudes en Next.js
import { verify } from 'jsonwebtoken'; // Función para verificar tokens JWT
import { serialize } from 'cookie'; // Función para serializar cookies

// Definición de la clave secreta para JWT, obtenida de las variables de entorno o usando 'secretkey' por defecto
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey'; 

/**
 * Maneja las solicitudes HTTP GET a esta API.
 * Este método verifica si el usuario está autenticado mediante un token JWT en las cookies.
 */
export async function GET(request: NextRequest) {
    try {
        // Obtiene el valor del token desde las cookies de la solicitud
        const token = request.cookies.get('token')?.value;

        // Si no se encuentra el token, responde con un error de autenticación
        if (!token) {
            return NextResponse.json(
                {
                    success: false,
                    status: 401,
                    message: 'No hay token', // Mensaje indicando que no se encontró el token
                    timestamp: Date.now(), // Marca de tiempo actual
                },
                { status: 401 } // Código de estado HTTP 401 (No autorizado)
            );
        }

        // Verifica la validez del token usando la clave secreta
        const data = verify(token, JWT_SECRET);

        // Si el token es válido, responde con los datos decodificados del token
        return NextResponse.json(
            {
                success: true,
                status: 200,
                message: 'Datos Cargados', // Mensaje indicando éxito en la carga de datos
                data: data, // Datos decodificados del token
                timestamp: Date.now(), // Marca de tiempo actual
                api: 'api/users', // Información adicional sobre la API
                method: 'GET', // Método HTTP utilizado
            },
            { status: 200 } // Código de estado HTTP 200 (OK)
        );
    } catch (error) {
        // En caso de error durante la verificación del token, se registra y se responde con un error interno del servidor
        console.error('Error al verificar el token:', error);
        return NextResponse.json(
            {
                success: false,
                status: 500,
                message: 'Error al verificar el token', // Mensaje indicando un error en la verificación del token
                timestamp: Date.now(), // Marca de tiempo actual
            },
            { status: 500 } // Código de estado HTTP 500 (Error interno del servidor)
        );
    }
}

/**
 * Maneja las solicitudes HTTP POST a esta API.
 * Este método se utiliza para cerrar la sesión del usuario eliminando el token JWT.
 */
export async function POST(request: NextRequest) {
    try {
        // Obtiene el valor del token desde las cookies de la solicitud
        const token = request.cookies.get('token')?.value;

        // Si no se encuentra el token, responde con un error de autenticación
        if (!token) {
            return NextResponse.json(
                {
                    success: false,
                    status: 401,
                    message: 'No hay token', // Mensaje indicando que no se encontró el token
                    timestamp: Date.now(), // Marca de tiempo actual
                },
                { status: 401 } // Código de estado HTTP 401 (No autorizado)
            );
        }

        try {
            // Intenta verificar el token para asegurarse de que es válido antes de eliminarlo
            verify(token, JWT_SECRET);
        } catch (verifyError) {
            // Si la verificación falla, se registra el error y se responde con un mensaje de token inválido o expirado
            console.error('Verificación de token fallida:', verifyError);
            return NextResponse.json(
                {
                    success: false,
                    status: 400,
                    message: 'Token inválido o expirado', // Mensaje indicando que el token es inválido o ha expirado
                    timestamp: Date.now(), // Marca de tiempo actual
                },
                { status: 400 } // Código de estado HTTP 400 (Solicitud incorrecta)
            );
        }

        // Serializa una cookie 'token' vacía para eliminarla del cliente
        const serializedCookie = serialize('token', '', {
            httpOnly: true, // La cookie solo es accesible por el servidor
            sameSite: 'strict', // Política de mismo sitio para prevenir CSRF
            maxAge: 0, // Establece la edad máxima en 0 para eliminar la cookie
            path: '/', // Ruta donde la cookie es válida
            secure: process.env.NODE_ENV === 'production', // Solo usa 'secure' en producción
        });

        // Crea una respuesta JSON indicando que la sesión ha sido cerrada exitosamente
        const response = NextResponse.json(
            {
                success: true,
                status: 200,
                message: 'Sesión cerrada', // Mensaje indicando que la sesión fue cerrada
                timestamp: Date.now(), // Marca de tiempo actual
            },
            { status: 200 } // Código de estado HTTP 200 (OK)
        );

        // Agrega la cookie serializada a las cabeceras de la respuesta para que el cliente la elimine
        response.headers.set('Set-Cookie', serializedCookie);

        // Retorna la respuesta al cliente
        return response;

    } catch (error) {
        // En caso de un error inesperado, se registra y se responde con un error interno del servidor
        console.error('Error inesperado en POST /api/auth:', error);
        return NextResponse.json(
            {
                success: false,
                status: 500,
                message: 'Error interno del servidor', // Mensaje indicando un error interno
                timestamp: Date.now(), // Marca de tiempo actual
            },
            { status: 500 } // Código de estado HTTP 500 (Error interno del servidor)
        );
    }
}
