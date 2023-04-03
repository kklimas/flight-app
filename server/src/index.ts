import express, {Express} from "express";
import * as dotenv from "dotenv";
import LogProvider from "./provider/log-provider.js";
import {flightRoute} from "./route/flight-route.js"

const app: Express = express();

// dotenv
dotenv.config();

// server
const PORT = process.env.PORT;

// flights
app.use('/flights', flightRoute);

app.listen(PORT, () => {
    LogProvider.info(`Server is listening on port ${PORT}.`);
});