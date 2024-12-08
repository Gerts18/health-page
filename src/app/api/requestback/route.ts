import { NextResponse } from 'next/server';
import { conn } from '@/libs/PostgDB';

// Configuración de la base de datos
// Aquí creamos un pool de conexiones a la base de datos Postgres.
// El objeto pool nos permite realizar consultas a la base de datos sin 
// tener que abrir y cerrar una conexión en cada operación.
/* const pool = new Pool({
  user: 'admin',
  host: 'dpg-csqq4vij1k6c73c10au0-a.oregon-postgres.render.com',
  database: 'healtpage',
  password: '1PZI32W2PRAoL2PAeaUuNROc2pIrQwgl',
  port: 5432,
  ssl: { rejectUnauthorized: false }, // Solo si tu base usa SSL, este parámetro desactiva la verificación del certificado.
}); */

// Manejo de solicitudes POST
export async function POST(req: Request) {
  try {
    // Obtenemos el cuerpo de la solicitud en formato JSON
    const body = await req.json();

    // Extraemos los datos enviados en el formulario
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

    // Validamos que todos los campos obligatorios estén presentes.
    // Si falta alguno, se devuelve un error 400.
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

    // Insertamos los datos en la tabla 'requests' utilizando una consulta parametrizada.
    // RETURNING * nos devuelve la fila insertada.
    const result = await conn.query(
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

    // Devolvemos la fila insertada como respuesta JSON con estado 201 (creado)
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    // Si ocurre un error durante el proceso (insertar en la BD, etc.), lo registramos y devolvemos un error 500.
    console.error('Error al guardar la solicitud:', error);
    return NextResponse.json(
      { message: 'Error al guardar la solicitud' },
      { status: 500 }
    );
  }
}

// Manejo de solicitudes GET (opcional, para recuperar todas las solicitudes)
export async function GET() {
  try {
    // Obtenemos todas las filas de la tabla 'requests', ordenadas por fecha de creación descendente
    const result = await conn.query('SELECT * FROM requests ORDER BY created_at DESC');

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

    // Devolvemos las solicitudes como respuesta JSON
    return NextResponse.json(formattedRequests, { status: 200 });
  } catch (error) {
    // Si ocurre un error al obtener las solicitudes, lo registramos y devolvemos un error 500.
    console.error('Error al obtener solicitudes:', error);
    return NextResponse.json(
      { message: 'Error al obtener solicitudes' },
      { status: 500 }
    );
  }
}
