import pg from "pg";
import * as dotenv from "dotenv";

dotenv.config();

const poolConfig = {
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
}

export class QueryExecutor {
    private static readonly pool = new pg.Pool(poolConfig);

    static executeQuery = async (query: string) => {
        return await this.pool.query(query);
    }
}

export const connectionPool = () => {
    return new pg.Pool(poolConfig);
}
