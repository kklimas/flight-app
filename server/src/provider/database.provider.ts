import pg from "pg";
import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.DATABASE_PORT === undefined ? '8099': process.env.DATABASE_PORT;
const poolConfig = {
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: parseInt(port),
}

export class QueryExecutor {
    private static readonly pool = new pg.Pool(poolConfig);

    static executeQuery = async (query: string) => {
        return await this.pool.query(query);
    }
}
