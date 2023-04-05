import express, {Express} from "express";
import * as dotenv from "dotenv";
import LogProvider from "./provider/log-provider.js";
import * as process from "process";
import {authRoute} from "./routes/auth-routes.js";

const app: Express = express();

// dotenv
dotenv.config();

// server
const PORT = process.env.PORT;

app.post('/login', (req, res) => {
    res.send('OK');
})

app.post('/register', (req, res) => {
    res.send('OK');
})

// app.use('/', apiRoute);

app.listen(PORT, () => {
    LogProvider.info(`Server is listening on port ${PORT}.`);
});