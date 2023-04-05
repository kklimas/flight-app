import * as UserService from "../service/user-service.js"
import * as JwtService from "../service/jwt-service.js"
import {UserDTO} from "fs-model/src/index.js";
import bcrypt from "bcrypt";

export const encryptPassword = (req, res, next) => {
    bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
            return next(saltError)
        } else {
            const user = req.body;
            bcrypt.hash(user.password, salt, function(hashError, hash) {
                if (hashError) {
                    return next(hashError)
                }
                user.password = hash
                next()
            })
        }
    })
}

export const register = async (userDTO: UserDTO) => {
    return UserService.getUserByEmail(userDTO.email)
        .then(result => {
            const users = result.rows;
            if (isNotEmpty(users)) {
                throw Error("Username exists.")
            }

            return UserService.addUser(userDTO)
                .then(() => {
                    userDTO.role = 1;
                    return JwtService.generateTokens(userDTO);
                })
        })
}

export const login = async (userDTO: UserDTO) => {
    return UserService.getUserByEmail(userDTO.email)
        .then(result => {
            const users = result.rows;
            if (!isNotEmpty(users)) {
                throw Error("User with given login does not exist.")
            }

            const user = users.at(0);
            return bcrypt.compare(userDTO.password, user.password)
                .then(passwordMatch => {
                    if (!passwordMatch) {
                        throw Error("Password is invalid.");
                    }
                    return JwtService.generateTokens(user);
                })
        })
}

const isNotEmpty = (users) => {
    return users instanceof Array && users.length > 0;
}

export const refresh = async (userDTO: UserDTO) => {
    return UserService.getUserByEmail(userDTO.email)
        .then(result => {
            const users = result.rows;
            if (!isNotEmpty(result.rows)) {
                throw Error("User does not exist.");
            }
            return JwtService.refresh(users.at(0));
        })
}