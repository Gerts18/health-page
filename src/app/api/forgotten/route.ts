import { NextResponse, NextRequest } from "next/server";
import { conn } from '@/libs/PostgDB';
import jwt from 'jsonwebtoken';
import { Resend } from 'resend';

// Recuperar contraseña olvidada
export async function POST(request: NextRequest) {
  try {
    // Leer los datos enviados desde el frontend
    const { email } = await request.json();

    // Validación de campos obligatorios
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          status: 400,
          message: "El correo es obligatorio",
          data: null,
          timestamp: Date.now(),
          api: "api/forgotten",
          method: "POST",
        },
        { status: 400 }
      );
    }

    console.log(email);

    // Query para verificar el correo
    const query = `
      SELECT email, password
      FROM users 
      WHERE email = $1
    `;
    const values = [email];

    // Consultar la base de datos
    const responseDB = await conn.query(query, values);

    // Verificar si las credenciales son válidas
    if (responseDB.rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          status: 401,
          message: "Correo no registrado",
          data: null,
          timestamp: Date.now(),
          api: "api/forgotten",
          method: "POST",
        },
        { status: 401 }
      );
    }

    // Extraer los datos del usuario encontrado
    const user = responseDB.rows[0];

    //console.log(user)
    console.log(user.email);
    console.log(user.password);
    
    // Envio de correo
    try{
    const resend = new Resend('re_o1mPkmKX_KXGKHfM3sieUYL3ykweD3dn4');

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: user.email,
        subject: 'Recuperación de contraseña Ficmac',
        html: `<p>Su contraseña es: <strong>${user.password}</strong></p>`
      });
    }catch(error){
        return NextResponse.json(
            {
              success: false,
              status: 401,
              message: "Correo no registrado",
              data: null,
              timestamp: Date.now(),
              api: "api/forgotten",
              method: "POST",
            },
            { status: 401 }
          );
    }
  
    // Crear la respuesta
    const response = NextResponse.json(
      {
        success: true,
        status: 200,
        message: "Envío de contraseña exitoso",
        data: user,
        timestamp: Date.now(),
        api: "api/forgotten",
        method: "POST",
      },
      { status: 200 }
    );

    // Devolver la respuesta
    return response;

  } catch (error) {
    console.error("Error en el backend:", error);

    return NextResponse.json(
      {
        success: false,
        status: 500,
        message: "Error al procesar el envio de contraseña",
        error: error instanceof Error ? error.message : "Error desconocido al enviar la contraseña",
        timestamp: Date.now(),
        api: "api/forgotten",
        method: "POST",
      },
      { status: 500 }
    );
  }
}