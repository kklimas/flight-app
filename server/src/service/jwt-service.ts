import jwt, {TokenExpiredError} from 'jsonwebtoken';
import fs from 'fs'
import {User, UserRole} from "../database/entity/User.js";

const privateKey = fs.readFileSync('private.key');

export const verifyCustomer = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(403)
    const privateKey = fs.readFileSync('private.key')

    jwt.verify(token, privateKey, (err: TokenExpiredError , user: User) => {
        if (err || user.role > 1) {
            // check if token expired
            const expirationDate = new Date(err.expiredAt)
            if (new Date() > expirationDate) {
                return res.sendStatus(401)
            }
            // if not
            return res.sendStatus(403)
        }

        const data = req.body;
        req.body = {
            user: user,
            data: data,
        }
        next(res.body)
    })
}

exports.verifyAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(403)
    const privateKey = fs.readFileSync('private.key')
    jwt.verify(token, privateKey, (err: TokenExpiredError, user: User) => {
        if (err || user.role > 0 ) {
            // check if token expired
            const expirationDate = new Date(err.expiredAt)
            if (new Date() > expirationDate) {
                return res.sendStatus(401)
            }
            // if not
            return res.sendStatus(403)
        }
        const data = req.body;
        req.body = {
            username: user.username,
            data: data
        }
        next(res.body)
    })
}

export const generateTokens = (user: User) => {
    return {
        accessToken: generateAccessToken(user),
        refreshToken: generateRefreshToken(user)
    }
}

export const refresh = (user: User) => {
    return generateAccessToken(user)
}

const generateRefreshToken = (user: User) => {
    const payload = {
        username: user.username,
        role: user.role,
        banned: user.banned
    }
    return jwt.sign(payload, privateKey, { expiresIn: '3600s'} )
}

const generateAccessToken = (user) => {
    const payload = {
        username: user.username,
        role: user.role,
        banned: user.banned
    }
    return jwt.sign(payload, privateKey, { expiresIn: '10s'} )
}