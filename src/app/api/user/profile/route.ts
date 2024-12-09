import { conn } from '@/libs/PostgDB';

export async function GET(request: Request) {
  try {
    // Obtener el email de los parámetros de la URL
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    // Verificar si se proporcionó un email
    if (!email) {
      return new Response(JSON.stringify({ error: "Email no proporcionado" }), {
        status: 400, // Código de estado 400 para solicitud incorrecta
      });
    }

    // Consulta SQL para obtener los datos del usuario por email
    const query = `
      SELECT nombre, apellidos, email, celular, username 
      FROM users 
      WHERE email = $1
    `;
    
    // Ejecutar la consulta y obtener el resultado
    const result = await conn.query(query, [email]);
    const user = result.rows[0];

    // Verificar si se encontró un usuario
    if (!user) {
      return new Response(JSON.stringify({ error: "Usuario no encontrado" }), {
        status: 404, // Código de estado 404 para no encontrado
      });
    }

    // Retornar los datos del usuario si se encontró
    return new Response(JSON.stringify(user), {
      status: 200, // Código de estado 200 para éxito
    });
  } catch (error) {
    // Manejo de errores en caso de que ocurra una excepción
    console.error('Error en GET /api/user/profile:', error);
    return new Response(JSON.stringify({ error: "Error del servidor" }), {
      status: 500, // Código de estado 500 para error del servidor
    });
  }
} 