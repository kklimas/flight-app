import * as AuthService from "../service/auth-service.js"
import LogProvider from "../provider/log-provider.js";
import {UserDTO} from "fs-model/src/index.js";

export const register = (req, res) => {
    const userDTO: UserDTO = extractUserFromRequest(req);
    AuthService.register(userDTO)
        .then((tokens) => {
            res.status(201).send(tokens);
        })
        .catch((err) => {
            const message = `Error occurred while registering new user: ${err.message}`;
            LogProvider.error(message);
            res.status(400).send({
                status: 400,
                message: err.message
            });
        })
}

export const login = (req, res) => {
    const userDTO: UserDTO = extractUserFromRequest(req);
    AuthService.login(userDTO)
        .then((tokens) => {
            res.status(201).send(tokens);
        })
        .catch((err) => {
            const message = `Error occurred during login attempt: ${err.message}`;
            LogProvider.error(message);
            res.status(400).send({
                status: 400,
                message: err.message
            });
        })
}

export const refresh = (req, res) => {
    const userDTO: UserDTO = extractUserFromRequest(req);
    AuthService.refresh(userDTO)
        .then((accessToken) => {
            res.send({
                accessToken: accessToken
            });
        })
        .catch((err) => {
            const message = `Error occurred during refreshing token: ${err.message}`;
            LogProvider.error(message);
            res.status(400).send({
                status: 400,
                message: err.message
            });
        })
}

const extractUserFromRequest = (req) => {
    if (!req.body) return;
    return {
        email: req.body.email,
        password: req.body.password
    }
}
