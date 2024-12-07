// Importamos las herramientas necesarias de Next.js y otras librerías
import { NextResponse, NextRequest } from "next/server"; // Para manejar solicitudes y respuestas en API routes de Next.js
import { verify } from 'jsonwebtoken'; // Para verificar y decodificar tokens JWT
import cookie from 'cookie'; // Para manejar cookies

// Controlador para obtener datos del usuario mediante una solicitud GET
export async function GET(request: NextRequest) {
    try {
        // Intentamos obtener el token almacenado en las cookies de la solicitud
        const token = request.cookies.get('token')?.value;

        // Si no hay token, retornamos un error 401 (No autorizado)
        if (!token) {
            return NextResponse.json(
                {
                    success: false, // Indica que la solicitud falló
                    status: 401, // Código de estado HTTP
                    message: 'No hay token', // Mensaje descriptivo del error
                    timestamp: Date.now(), // Marca de tiempo para registrar el momento de la respuesta
                },
                { status: 401 } // Código de estado HTTP para la respuesta
            );
        }

        // Verificamos el token con la clave secreta ('secretkey')
        const data = verify(token, 'secretkey'); // Decodifica el token y extrae los datos

        // Si la verificación es exitosa, devolvemos los datos del usuario
        return NextResponse.json(
            {
                success: true, // Indica éxito en la operación
                status: 200, // Código de estado HTTP
                message: 'Datos Cargados', // Mensaje descriptivo
                data: data, // Datos extraídos del token
                timestamp: Date.now(), // Marca de tiempo
                api: 'api/users', // Identificación del endpoint
                method: 'GET', // Método HTTP utilizado
            },
            { status: 200 } // Código de estado HTTP para la respuesta
        );
    } catch {
        // Si ocurre un error al verificar el token, retornamos un error 500
        return NextResponse.json(
            {
                success: false, // Indica que la solicitud falló
                status: 500, // Código de estado HTTP
                message: 'Error al verificar el token', // Mensaje descriptivo del error
                timestamp: Date.now(), // Marca de tiempo
            },
            { status: 500 } // Código de estado HTTP para la respuesta
        );
    }
}

// Controlador para cerrar sesión mediante una solicitud POST
export async function POST(request: NextRequest) {
    try {
        // Intentamos obtener el token almacenado en las cookies de la solicitud
        const token = request.cookies.get('token')?.value;

        // Si no hay token, retornamos un error 401 (No autorizado)
        if (!token) {
            return NextResponse.json(
                {
                    success: false, // Indica que la solicitud falló
                    status: 401, // Código de estado HTTP
                    message: 'No hay token', // Mensaje descriptivo del error
                    timestamp: Date.now(), // Marca de tiempo
                },
                { status: 401 } // Código de estado HTTP para la respuesta
            );
        }

        // Verificamos el token con la clave secreta ('secretkey') para asegurarnos de que sea válido
        verify(token, 'secretkey');

        // Serializamos una cookie vacía con una duración de vida de 0 para eliminarla
        const serializedCookie = cookie.serialize('token', '', {
            httpOnly: true, // La cookie no es accesible desde JavaScript en el navegador
            sameSite: 'strict', // Restringe el envío de la cookie solo a solicitudes del mismo sitio
            maxAge: 0, // Indica que la cookie debe eliminarse inmediatamente
            path: '/', // Aplica la eliminación de la cookie a toda la aplicación
        });

        // Creamos la respuesta JSON indicando que la sesión se ha cerrado
        const response = NextResponse.json(
            {
                success: true, // Indica éxito en la operación
                status: 200, // Código de estado HTTP
                message: 'Sesión cerrada', // Mensaje descriptivo
                timestamp: Date.now(), // Marca de tiempo
            },
            { status: 200 } // Código de estado HTTP para la respuesta
        );

        // Establecemos la cookie serializada en los encabezados de la respuesta
        response.headers.set('Set-Cookie', serializedCookie);

        return response; // Devolvemos la respuesta final

    } catch {
        // Si ocurre un error al verificar el token, retornamos un error 500
        return NextResponse.json(
            {
                success: false, // Indica que la solicitud falló
                status: 500, // Código de estado HTTP
                message: 'Error al verificar el token', // Mensaje descriptivo del error
                timestamp: Date.now(), // Marca de tiempo
            },
            { status: 500 } // Código de estado HTTP para la respuesta
        );
    }
}
