import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Configuración de la base de datos
// Aquí se crea un pool de conexiones a la base de datos Postgres.
// Esto permite ejecutar consultas sin tener que abrir y cerrar conexiones constantemente.
const conn = new Pool({
  user: 'admin',
  host: 'dpg-csqq4vij1k6c73c10au0-a.oregon-postgres.render.com',
  database: 'healtpage',
  password: '1PZI32W2PRAoL2PAeaUuNROc2pIrQwgl',
  port: 5432,
  ssl: { rejectUnauthorized: false }, // Si la base usa SSL, esta opción deshabilita la verificación estricta del certificado.
}); 

// Manejo de POST
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { titulo, contenido, imagen, link } = body;

    if (!titulo || !contenido || !imagen || !link) {
      return NextResponse.json(
        { message: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    const result = await conn.query(
      'INSERT INTO news (titulo, contenido, imagen, link) VALUES ($1, $2, $3, $4) RETURNING *',
      [titulo, contenido, imagen, link]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error al guardar la noticia:', error);
    return NextResponse.json(
      { message: 'Error al guardar la noticia' },
      { status: 500 }
    );
  }
}

// Manejo de GET
export async function GET() {
    try {
      const result = await conn.query('SELECT * FROM news ORDER BY fecha DESC');
  
      // Mapear los datos de la base de datos al formato esperado por el frontend
      const formattedNews = result.rows.map((item) => ({
        id: item.id,
        title: item.titulo, // Mapeo del campo "titulo" al formato requerido
        date: item.fecha ? new Date(item.fecha).toISOString().split('T')[0] : '', // Aseguramos el formato de la fecha
        description: item.contenido, // Mapeo del campo "contenido" al formato requerido
        imageSrc: item.imagen, // Mapeo del campo "imagen" al formato requerido
        link: item.link, // Campo "link" ya coincide
      }));
  
      // Devolver las noticias en el formato correcto
      return NextResponse.json(formattedNews, { status: 200 });
    } catch (error) {
      console.error('Error al obtener noticias:', error);
      return NextResponse.json(
        { message: 'Error al obtener noticias' },
        { status: 500 }
      );
    }
  }
  
