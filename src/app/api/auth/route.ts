import { NextResponse, NextRequest } from "next/server";
import { verify } from 'jsonwebtoken';
import cookie from 'cookie';

//Obtener los datos del usuario
export async function GET(request: NextRequest) {
    try {
        // Obteniendo el token
        const token = request.cookies.get('token')?.value;

        if (!token) {
            return NextResponse.json(
                {
                    success: false,
                    status: 401,
                    message: 'No hay token',
                    timestamp: Date.now(),
                },
                { status: 401 }
            );
        }

        const data = verify(token, 'secretkey'); // Obteniendo los datos del token

        return NextResponse.json(
            {
                success: true,
                status: 200,
                message: 'Datos Cargados',
                data: data,
                timestamp: Date.now(),
                api: 'api/users',
                method: 'GET',
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                status: 500,
                message: 'Error al verificar el token',
                timestamp: Date.now(),
            },
            { status: 500 }
        );
    }
}


//Cerrar sesión
export async function POST(request: NextRequest) {
    try {
        const token = request.cookies.get('token')?.value;

        if (!token) {
            return NextResponse.json(
                {
                    success: false,
                    status: 401,
                    message: 'No hay token',
                    timestamp: Date.now(),
                },
                { status: 401 }
            );
        }

        // Verificar el token
        verify(token, 'secretkey');

        // Serializar la cookie para eliminarla
        const serializedCookie = cookie.serialize('token', '', {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 0, // Esto eliminará la cookie
            path: '/',
        });

        // Crear una respuesta y establecer el encabezado 'Set-Cookie'
        const response = NextResponse.json(
            {
                success: true,
                status: 200,
                message: 'Sesión cerrada',
                timestamp: Date.now(),
            },
            { status: 200 }
        );

        // Establecer la cookie en la respuesta
        response.headers.set('Set-Cookie', serializedCookie);

        return response;

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                status: 500,
                message: 'Error al verificar el token',
                timestamp: Date.now(),
            },
            { status: 500 }
        );
    }
}