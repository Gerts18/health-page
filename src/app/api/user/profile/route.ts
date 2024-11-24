import { conn } from '@/libs/PostgDB';

export async function GET(request: Request) {
  try {
    // Obtener el email de los parámetros de la URL
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return new Response(JSON.stringify({ error: "Email no proporcionado" }), {
        status: 400,
      });
    }

    const query = `
      SELECT nombre, apellidos, email, celular, username 
      FROM users 
      WHERE email = $1
    `;
    
    const result = await conn.query(query, [email]);
    const user = result.rows[0];

    if (!user) {
      return new Response(JSON.stringify({ error: "Usuario no encontrado" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    console.error('Error en GET /api/user/profile:', error);
    return new Response(JSON.stringify({ error: "Error del servidor" }), {
      status: 500,
    });
  }
} 