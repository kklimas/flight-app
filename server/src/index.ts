import express, {Express} from "express";
import * as dotenv from "dotenv";
import LogProvider from "./provider/log-provider.js";
import {flightRoute} from "./route/flight-route.js"
import {reservationRoute} from "./route/reservation-route.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import {swaggerConfig} from "./config/swagger-config.js";
import {testRoute} from "./route/test-route.js";

const app: Express = express();

// dotenv
dotenv.config();

// server
const PORT = process.env.PORT;

const specs = swaggerJsDoc(swaggerConfig);
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

app.use('/test', testRoute)

// flights
app.use('/flights', flightRoute);

// reservations
app.use('/reservation', reservationRoute);

app.listen(PORT, () => {
    LogProvider.info(`Server is listening on port ${PORT}.`);
});