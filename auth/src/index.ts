import express, {Express} from "express";
import * as dotenv from "dotenv";
import LogProvider from "./provider/log-provider.js";
import {authRoute} from "./routes/auth-routes.js";

const app: Express = express();

// dotenv
dotenv.config();

// server
const PORT = process.env.PORT;

app.use('/', authRoute)


app.listen(PORT, () => {
    LogProvider.info(`Server is listening on port ${PORT}.`);
});