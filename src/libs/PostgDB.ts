import {Pool} from 'pg'

let conn: any

if (!conn){
    conn = new Pool({
        user: 'admin',
        password: '1PZI32W2PRAoL2PAeaUuNROc2pIrQwgl',
        host: 'dpg-csqq4vij1k6c73c10au0-a.oregon-postgres.render.com',
        port: 5432,
        database: 'healtpage',
        ssl: {
            rejectUnauthorized: false
        }
    });
}

export {conn};
