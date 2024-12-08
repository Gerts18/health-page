// types/global.d.ts
import { Pool } from 'pg';

declare global {
  namespace NodeJS {
    interface Global {
      pgPool: Pool;
    }
  }
}

export {};