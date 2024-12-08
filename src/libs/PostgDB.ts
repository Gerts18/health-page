// db.ts
import { Pool } from 'pg';

// Extender la interfaz global de NodeJS
declare global {
  namespace NodeJS {
    interface Global {
      pgPool: Pool;
    }
  }
}

// Configuración de la conexión utilizando variables de entorno
const conn = new Pool({
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  host: process.env.DB_HOST as string,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DATABASE as string,
  ssl: {
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === 'true'
  }
}); 


export { conn };

