import { NextResponse, NextRequest } from "next/server";
import { conn } from '@/libs/PostgDB';
import jwt from 'jsonwebtoken';
import {serialize} from 'cookie';

export async function POST(request: NextRequest) {
  try {
    // Leer los datos enviados desde el frontend
    const { email, password } = await request.json();

    // Validación de campos obligatorios
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "El correo y la contraseña son obligatorios",
          data: null,
          timestamp: Date.now(),
          api: "api/backlogin",
          method: "POST",
        },
        { status: 400 }
      );
    }

    // Query para verificar las credenciales
    const query = `
      SELECT email, first_name
      FROM users 
      WHERE email = $1 AND password = $2
    `;
    const values = [email, password];

    // Consultar la base de datos
    const responseDB = await conn.query(query, values);

    // Verificar si las credenciales son válidas
    if (responseDB.rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          status: 401,
          message: "Correo o contraseña incorrectos",
          data: null,
          timestamp: Date.now(),
          api: "api/backlogin",
          method: "POST",
        },
        { status: 401 }
      );
    }

    // Extraer los datos del usuario encontrado
    const user = responseDB.rows[0];

    //console.log(user['first_name'])

    //Genera el token unico
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), // Tiempo de expiracion de token, 1 hora de duración
      name: user['first_name'], //Aqui se coloca el nombre del usuario
      email: user['email'], //Aqui se coloca el email del usuario
    }, 'secretkey')


    // Crear la cookie con el token
    // Crear la respuesta
    const response = NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Inicio de sesión exitoso",
        data: user,
        timestamp: Date.now(),
        api: "api/backlogin",
        method: "POST",
      },
      { status: 200 }
    );

    // Adjuntar la cookie a la respuesta
    response.cookies.set('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    // Devolver la respuesta
    return response;


  } catch (error) {
    console.error("Error en el backend:", error);

    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error al procesar el inicio de sesión",
        error: error instanceof Error ? error.message : "Error desconocido al iniciar sesión",
        timestamp: Date.now(),
        api: "api/backlogin",
        method: "POST",
      },
      { status: 500 }
    );
  }
}
