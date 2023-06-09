import {UserCreationDTO} from "../database/entity/user.entity.js";

export const register = async (body: UserCreationDTO) => {
    const username = body.username;
    // todo implement users service
    const users = [];

    if (users instanceof Array && users.length > 0) {
        throw Error("Username exists.")
    }

    // todo query to create user in db
}