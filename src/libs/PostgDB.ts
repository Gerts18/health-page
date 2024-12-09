// Importación de la clase Pool desde la librería 'pg'.
// 'pg' es un cliente PostgreSQL para Node.js que permite interactuar con bases de datos PostgreSQL.
import { Pool } from 'pg';

// Creación de una nueva instancia de Pool para manejar conexiones a la base de datos PostgreSQL.
// Pool administra múltiples conexiones reutilizables, lo que mejora el rendimiento al manejar múltiples solicitudes.
const conn = new Pool({
  user: 'admin', // Nombre de usuario de la base de datos. Aquí se especifica el usuario con permisos para acceder a la base de datos.
  host: 'dpg-csqq4vij1k6c73c10au0-a.oregon-postgres.render.com', // Dirección del servidor de la base de datos PostgreSQL.
  database: 'healtpage', // Nombre de la base de datos a la que se está conectando.
  password: '1PZI32W2PRAoL2PAeaUuNROc2pIrQwgl', // Contraseña del usuario de la base de datos.
  port: 5432, // Puerto en el que el servidor PostgreSQL está escuchando. El puerto por defecto para PostgreSQL es el 5432.
  ssl: { rejectUnauthorized: false }, // Configuración de SSL para la conexión. 'rejectUnauthorized: false' permite conexiones SSL sin verificar la autoridad del certificado.
});

// Exportación de la instancia de Pool para que pueda ser utilizada en otros módulos de la aplicación.
// Al exportar 'conn', se facilita la reutilización de la misma configuración de conexión en diferentes partes de la aplicación.
export { conn };
