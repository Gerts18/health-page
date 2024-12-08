// import { NextResponse } from 'next/server';
// import { Pool } from 'pg';
// import cookie from 'cookie';

// // Configuración de la base de datos
// const pool = new Pool({
//   user: 'admin',
//   host: 'dpg-csqq4vij1k6c73c10au0-a.oregon-postgres.render.com',
//   database: 'healtpage',
//   password: '1PZI32W2PRAoL2PAeaUuNROc2pIrQwgl',
//   port: 5432,
//   ssl: { rejectUnauthorized: false }, // Solo si tu base usa SSL
// });

// // Manejo de POST
// export async function POST(req) {
//   try {
//     const contentType = req.headers.get('content-type');
//     if (!contentType || !contentType.includes('multipart/form-data')) {
//       return NextResponse.json(
//         { message: 'Content-Type debe ser multipart/form-data' },
//         { status: 400 }
//       );
//     }

//     const cookies = cookie.parse(req.headers.get('cookie') || '');
//     const email = cookies.email;

//     if (!email || !name || !lastNames) {
//       return NextResponse.json(
//         { message: 'Faltan datos de usuario en la cookie' },
//         { status: 400 }
//       );
//     }

//     const formData = await req.formData();
//     const fecha_nac = formData.get('dateOfBirth');
//     const sexo = formData.get('gender');
//     const identificacion_doc = formData.get('identificacion_doc');
//     const direccion = formData.get('address');
//     const ciudad = formData.get('city');
//     const telefono = formData.get('phone');
//     const celular_contacto = formData.get('contactPhone');
//     const institucion = formData.get('institutionRem');
//     const tipo_prueba = formData.get('typeTest');
//     const orden_medica_especialista_doc = formData.get('orden_medica_especialista_doc');
//     const comprobante_pago_doc = formData.get('comprobante_pago_doc');
//     const resumen_historia_med_doc = formData.get('resumen_historia_med_doc');
//     const professionalid = formData.get('cedula');

//     if (!fecha_nac || !sexo || !direccion || !ciudad || !telefono || !celular_contacto || !institucion || !tipo_prueba) {
//       return NextResponse.json(
//         { message: 'Todos los campos obligatorios deben ser proporcionados' },
//         { status: 400 }
//       );
//     }

//     // Verificar si el professionalid existe en la tabla 'users' usando la columna correcta
//     if (professionalid) {
//       const userCheck = await pool.query(
//         'SELECT professionalid FROM users WHERE professionalid = $1',
//         [professionalid]
//       );

//       if (userCheck.rows.length === 0) {
//         return NextResponse.json(
//           { message: 'El professionalid proporcionado no existe en la tabla users' },
//           { status: 400 }
//         );
//       }
//     }

//     // Convertir archivos a Buffer para la inserción en PostgreSQL
//     const identificacionBuffer = identificacion_doc ? Buffer.from(await identificacion_doc.arrayBuffer()) : null;
//     const ordenMedicaBuffer = orden_medica_especialista_doc ? Buffer.from(await orden_medica_especialista_doc.arrayBuffer()) : null;
//     const comprobantePagoBuffer = comprobante_pago_doc ? Buffer.from(await comprobante_pago_doc.arrayBuffer()) : null;
//     const resumenHistoriaBuffer = resumen_historia_med_doc ? Buffer.from(await resumen_historia_med_doc.arrayBuffer()) : null;

//     const result = await pool.query(
//       `INSERT INTO requests (
//         fecha_nac, nombre, apellido, sexo, identificacion_doc, direccion, ciudad, telefono, correo_electronico,
//         celular_contacto, institucion, tipo_prueba, orden_medica_especialista_doc, comprobante_pago_doc,
//         resumen_historia_med_doc, professionalid
//       ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
//       [
//         fecha_nac, name, lastNames, sexo, identificacionBuffer, direccion, ciudad, telefono, email,
//         celular_contacto, institucion, tipo_prueba, ordenMedicaBuffer, comprobantePagoBuffer,
//         resumenHistoriaBuffer, professionalid
//       ]
//     );

//     return NextResponse.json(result.rows[0], { status: 201 });
//   } catch (error) {
//     console.error('Error al guardar la solicitud:', error);
//     return NextResponse.json(
//       { message: 'Error al guardar la solicitud' },
//       { status: 500 }
//     );
//   }
// }
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

// Manejo de solicitudes POST
// Esta función se ejecuta al recibir una petición POST a la ruta donde esté definido este handler.
// Permite subir datos de un formulario, incluyendo campos de texto y archivos adjuntos.
export async function POST(req: Request) {
  try {
    // Extraemos el FormData de la petición. Esto se utiliza cuando el body llega en formato multipart/form-data.
    const formData = await req.formData();

    // Obtenemos los campos del formulario:
    const fecha_nac = formData.get('dateOfBirth');
    const sexo = formData.get('gender');
    const identificacion_doc = formData.get('identificacion_doc');
    const direccion = formData.get('address');
    const ciudad = formData.get('city');
    const telefono = formData.get('phone');
    const celular_contacto = formData.get('contactPhone');
    const institucion = formData.get('institutionRem');
    const tipo_prueba = formData.get('typeTest');
    const orden_medica_especialista_doc = formData.get('orden_medica_especialista_doc');
    const comprobante_pago_doc = formData.get('comprobante_pago_doc');
    const resumen_historia_med_doc = formData.get('resumen_historia_med_doc');
    const professionalid = formData.get('cedula') || 'none'; // Si no hay 'cedula', se guarda null.
    const nombre = formData.get('name');
    const apellido = formData.get('lastName');
    const correo_electronico = formData.get('email');

    // Validamos que los campos obligatorios estén presentes.
    // Si alguno falta, respondemos con un error 400 (Bad Request).
    if (!fecha_nac || !sexo || !direccion || !ciudad || !telefono || !tipo_prueba || !nombre || !apellido || !correo_electronico) {
      return NextResponse.json(
        { message: 'Todos los campos obligatorios deben ser proporcionados' },
        { status: 400 }
      );
    }

    // Convertimos los archivos adjuntos (si existen) a Buffer para guardarlos en la base de datos.
    // Estos campos pueden ser archivos binarios (como imágenes, PDFs, etc.).
    const identificacionBuffer = identificacion_doc ? Buffer.from(await (identificacion_doc as Blob).arrayBuffer()) : null;
    const ordenMedicaBuffer = orden_medica_especialista_doc ? Buffer.from(await (orden_medica_especialista_doc as Blob).arrayBuffer()) : null;
    const comprobantePagoBuffer = comprobante_pago_doc ? Buffer.from(await (comprobante_pago_doc as Blob).arrayBuffer()) : null;
    const resumenHistoriaBuffer = resumen_historia_med_doc ? Buffer.from(await (resumen_historia_med_doc as Blob).arrayBuffer()) : null;

    // Ejecutamos la consulta para insertar los datos en la tabla 'requests'.
    // Utilizamos parámetros ($1, $2, ...) para prevenir inyecciones SQL.
    const result = await conn.query(
      `INSERT INTO requests (
        fecha_nac, nombre, apellido, sexo, identificacion_doc, direccion, ciudad, telefono, correo_electronico,
        celular_contacto, institucion, tipo_prueba, orden_medica_especialista_doc, comprobante_pago_doc,
        resumen_historia_med_doc, professionalid
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
      [
        fecha_nac, nombre, apellido, sexo, identificacionBuffer, direccion, ciudad, telefono, correo_electronico,
        celular_contacto, institucion, tipo_prueba, ordenMedicaBuffer, comprobantePagoBuffer,
        resumenHistoriaBuffer, professionalid
      ]
    );

    // Si todo sale bien, devolvemos la fila insertada con un estado 201 (creado).
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    // Si ocurre un error (ej. problemas con la BD), lo registramos y devolvemos un error 500 (Internal Server Error).
    console.error('Error al guardar la solicitud:', error);
    return NextResponse.json(
      { message: 'Error al guardar la solicitud' },
      { status: 500 }
    );
  }
}
