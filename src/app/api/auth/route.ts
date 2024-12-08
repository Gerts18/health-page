import { NextResponse, NextRequest } from "next/server";
import { verify } from 'jsonwebtoken';
import cookie from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET || ''; 

export async function GET(request: NextRequest) {
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

        const data = verify(token, JWT_SECRET);

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
        console.error('Error al verificar el token:', error);
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

        try {
            verify(token, JWT_SECRET);
        } catch (verifyError) {
            console.error('Verificación de token fallida:', verifyError);
            return NextResponse.json(
                {
                    success: false,
                    status: 400,
                    message: 'Token inválido o expirado',
                    timestamp: Date.now(),
                },
                { status: 400 }
            );
        }

        const serializedCookie = cookie.serialize('token', '', {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 0,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
        });

        const response = NextResponse.json(
            {
                success: true,
                status: 200,
                message: 'Sesión cerrada',
                timestamp: Date.now(),
            },
            { status: 200 }
        );

        response.headers.set('Set-Cookie', serializedCookie);

        return response;

    } catch (error) {
        console.error('Error inesperado en POST /api/auth:', error);
        return NextResponse.json(
            {
                success: false,
                status: 500,
                message: 'Error interno del servidor',
                timestamp: Date.now(),
            },
            { status: 500 }
        );
    }
}

