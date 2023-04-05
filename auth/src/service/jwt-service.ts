import jwt, {TokenExpiredError} from 'jsonwebtoken';
import fs from 'fs'
import {User, UserDTO} from "fs-model/src/index.js";


const privateKey = fs.readFileSync('private.key');

export const verifyCustomer = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(403)
    const privateKey = fs.readFileSync('private.key')

    jwt.verify(token, privateKey, (err: TokenExpiredError , user: UserDTO) => {
        if (err || user.role > 1) {
            const expirationDate = new Date(err.expiredAt)
            if (new Date() > expirationDate) {
                return res.sendStatus(401)
            }
            // if not
            return res.sendStatus(403)
        }
        req.body = {
            email: user.email,
            role: user.role,
        }
        next(res.body)
    })
}

export const verifyAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(403)
    const privateKey = fs.readFileSync('private.key')

    jwt.verify(token, privateKey, (err: TokenExpiredError , user: UserDTO) => {
        if (err || user.role > 0) {
            // check if token expired
            const expirationDate = new Date(err.expiredAt)
            if (new Date() > expirationDate) {
                return res.sendStatus(401)
            }
            // if not
            return res.sendStatus(403)
        }
        req.body = {
            email: user.email,
            role: user.role,
        }
        next(res.body)
    })
}

export const generateTokens = (user: UserDTO) => {
    return {
        accessToken: generateAccessToken(user),
        refreshToken: generateRefreshToken(user)
    }
}

export const refresh = (user: UserDTO) => {
    return generateAccessToken(user)
}

const generateRefreshToken = (user: UserDTO) => {
    const payload = {
        email: user.email,
        role: user.role,
    }
    return jwt.sign(payload, privateKey, { expiresIn: '3600s'} )
}

const generateAccessToken = (user: UserDTO) => {
    const payload = {
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, privateKey, { expiresIn: '60s'} )
}