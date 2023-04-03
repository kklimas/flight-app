import * as DatabaseProvider from "../provider/database-provider.js"
import {UserCreationDTO} from "../database/entity/User.js";
import LogProvider from "../provider/log-provider.js";

const pool = DatabaseProvider.connectionPool();

export const createUser = (request, response) => {
    const user: UserCreationDTO = request.body;
    pool.query('BEGIN', (err) => {
        if (err) {
            LogProvider.error(err);
            return;
        }

        const query = `insert into t_user (username, password, email)
                       values (${user.username}, ${user.password}, ${user.email})`;
        pool.query(query, (err, res) => {
            if (err) {
                LogProvider.error(err);
                return;
            }
            pool.query('COMMIT', (err) => {
                if (err) {
                    LogProvider.error(err);
                }
                response.status(201).send(res.rows);
            })

        })
    })
}