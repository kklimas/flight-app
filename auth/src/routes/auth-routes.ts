import express from 'express';
import bodyParser from 'body-parser';
import * as AuthController from "../controller/auth-controller.js";
import * as JwtService from "../service/jwt-service.js";
import {encryptPassword} from "../service/auth-service.js";

const jsonParser = bodyParser.json()

const verifiedCallback = (req, res) => {
    res.sendStatus(200);
}

export const authRoute = express.Router();
authRoute.get('/verifyAdmin', JwtService.verifyAdmin, verifiedCallback);
authRoute.get('/verifyCustomer', JwtService.verifyCustomer, verifiedCallback);
authRoute.get('/refresh', JwtService.verifyCustomer, AuthController.refresh)
authRoute.post('/login', jsonParser, AuthController.login)
authRoute.post('/register', jsonParser, encryptPassword, AuthController.register)
