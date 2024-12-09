import { NextResponse } from 'next/server'; // Importa NextResponse para manejar respuestas HTTP
import { Pool } from 'pg'; // Importa Pool para manejar conexiones a la base de datos PostgreSQL

// Configuración de la conexión a la base de datos
const conn = new Pool({
  user: 'admin', // Usuario de la base de datos
  host: 'dpg-csqq4vij1k6c73c10au0-a.oregon-postgres.render.com', // Host de la base de datos
  database: 'healtpage', // Nombre de la base de datos
  password: '1PZI32W2PRAoL2PAeaUuNROc2pIrQwgl', // Contraseña de la base de datos
  port: 5432, // Puerto de conexión
  ssl: { rejectUnauthorized: false }, // Configuración SSL
});

// Función asíncrona para manejar solicitudes GET
export async function GET() {
  try {
    console.log('Intentando conectar a la base de datos...'); // Mensaje de intento de conexión
    const client = await conn.connect(); // Conecta al cliente de la base de datos
    console.log('Conexión exitosa'); // Mensaje de conexión exitosa

    try {
      // Realiza una consulta a la base de datos para obtener registros
      const result = await client.query(`
        SELECT 
          nombre,
          apellido,
          telefono,
          correo_electronico,
          celular_contacto,
          tipo_prueba,
          professionalid
        FROM requests 
        ORDER BY fecha_nac DESC
      `);

      console.log('Número de registros encontrados:', result.rows.length); // Muestra el número de registros encontrados

      // Devuelve una respuesta JSON con los datos obtenidos
      return NextResponse.json({
        success: true,
        data: result.rows // Datos de los registros
      });

    } finally {
      client.release(); // Libera el cliente después de la consulta
    }

  } catch (error) {
    console.error('Error detallado:', error); // Muestra el error en la consola
    
    // Devuelve una respuesta JSON con el error
    return NextResponse.json({
      success: false,
      message: 'Error en el servidor',
      error: error instanceof Error ? {
        message: error.message, // Mensaje de error
        stack: error.stack // Pila de errores
      } : 'Error desconocido' // Mensaje para errores desconocidos
    }, { status: 500 }); // Establece el estado de la respuesta a 500
  }
} 