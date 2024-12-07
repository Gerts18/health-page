import { NextResponse } from 'next/server';
import { Pool } from 'pg';

// Configuración de la base de datos
const pool = new Pool({
  user: 'admin',
  host: 'dpg-csqq4vij1k6c73c10au0-a.oregon-postgres.render.com',
  database: 'healtpage',
  password: '1PZI32W2PRAoL2PAeaUuNROc2pIrQwgl',
  port: 5432,
  ssl: { rejectUnauthorized: false }, // Solo si tu base usa SSL
});

// Manejo de POST
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Extraer los datos del formulario del cuerpo de la solicitud
    const {
      first_name,
      last_name,
      document_type,
      document_number,
      birth_date,
      age,
      city_of_residence,
      residence_address,
      nationality,
      phone,
      email,
      email_verification,
      ips,
      eps,
      contact_relation,
      contact_phone,
      privacy_policy,
    } = body;

    // Validar que todos los campos obligatorios estén presentes
    if (
      !first_name ||
      !last_name ||
      !document_type ||
      !document_number ||
      !birth_date ||
      !age ||
      !city_of_residence ||
      !residence_address ||
      !nationality ||
      !phone ||
      !email ||
      !email_verification ||
      !ips ||
      !eps ||
      !contact_relation ||
      !contact_phone ||
      privacy_policy === undefined
    ) {
      return NextResponse.json(
        { message: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Insertar los datos en la tabla `requests`
    const result = await pool.query(
      `INSERT INTO requests (
        first_name, last_name, document_type, document_number, birth_date, age, 
        city_of_residence, residence_address, nationality, phone, email, 
        email_verification, ips, eps, contact_relation, contact_phone, privacy_policy
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17
      ) RETURNING *`,
      [
        first_name,
        last_name,
        document_type,
        document_number,
        birth_date,
        age,
        city_of_residence,
        residence_address,
        nationality,
        phone,
        email,
        email_verification,
        ips,
        eps,
        contact_relation,
        contact_phone,
        privacy_policy,
      ]
    );

    // Devolver la fila insertada como respuesta
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error al guardar la solicitud:', error);
    return NextResponse.json(
      { message: 'Error al guardar la solicitud' },
      { status: 500 }
    );
  }
}

// Manejo de GET (opcional, para recuperar solicitudes)
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM requests ORDER BY created_at DESC');

    // Formatear los datos para que coincidan con los nombres de columnas esperados
    const formattedRequests = result.rows.map((item) => ({
      id: item.id,
      first_name: item.first_name,
      last_name: item.last_name,
      document_type: item.document_type,
      document_number: item.document_number,
      birth_date: item.birth_date,
      age: item.age,
      city_of_residence: item.city_of_residence,
      residence_address: item.residence_address,
      nationality: item.nationality,
      phone: item.phone,
      email: item.email,
      email_verification: item.email_verification,
      ips: item.ips,
      eps: item.eps,
      contact_relation: item.contact_relation,
      contact_phone: item.contact_phone,
      privacy_policy: item.privacy_policy,
      created_at: item.created_at,
    }));

    return NextResponse.json(formattedRequests, { status: 200 });
  } catch (error) {
    console.error('Error al obtener solicitudes:', error);
    return NextResponse.json(
      { message: 'Error al obtener solicitudes' },
      { status: 500 }
    );
  }
}
