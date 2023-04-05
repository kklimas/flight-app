import {QueryExecutor} from "../provider/database-provider.js"
import {UserDTO} from "../../.yalc/fs-model/src/index.js";


export const getUserByEmail = async (email: string) => {
    const query = `select *
                   from t_user t
                   where t.email = '${email}'`;
    return QueryExecutor.executeQuery(query)
}

export const addUser = async (userDTO: UserDTO) => {
    const query = `insert into t_user (email, password)
                   values ('${userDTO.email}', '${userDTO.password}')`;
    return QueryExecutor.executeQuery(query);
}