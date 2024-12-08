import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'admin',
  host: 'dpg-csqq4vij1k6c73c10au0-a.oregon-postgres.render.com',
  database: 'healtpage',
  password: '1PZI32W2PRAoL2PAeaUuNROc2pIrQwgl',
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

export async function GET() {
  try {
    console.log('Intentando conectar a la base de datos...');
    const client = await pool.connect();
    console.log('Conexión exitosa');

    try {
      const result = await client.query(`
        SELECT 
          nombre,
          apellido,
          telefono,
          correo_electronico,
          celular_contacto,
          tipo_prueba
        FROM requests 
        ORDER BY fecha_nac DESC
      `);

      console.log('Número de registros encontrados:', result.rows.length);

      return NextResponse.json({
        success: true,
        data: result.rows
      });

    } finally {
      client.release();
    }

  } catch (error) {
    console.error('Error detallado:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Error en el servidor',
      error: error instanceof Error ? {
        message: error.message,
        stack: error.stack
      } : 'Error desconocido'
    }, { status: 500 });
  }
} 