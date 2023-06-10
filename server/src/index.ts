import express, {Express} from "express";
import * as dotenv from "dotenv";
import LogProvider from "./provider/log.provider.js";
import {flightRoute} from "./route/flight.route.js"
import {reservationRoute} from "./route/reservation.route.js";
import {operationRoute} from "./route/operation.route.js";
import swaggerUI from "swagger-ui-express";
import router from "./route/test.route.js";
import swaggerJSDoc from "swagger-jsdoc";

const app: Express = express();

// dotenv
dotenv.config();

// server
const PORT = process.env.PORT;

app.use(express.json())

// documentation
app.use(
    "/docs",
    swaggerUI.serve,
    swaggerUI.setup(undefined, {
        swaggerOptions: {
            url: "build/swagger.json",
        },
    })
);

app.use('/test', router)
app.get('/test', (req, res) => res.send('Hello'))

// flights
app.use('/flights', flightRoute);

// reservations
app.use('/reservation', reservationRoute);

// operation logs
app.use('/operation', operationRoute)

app.listen(PORT, () => {
    LogProvider.info(`Server is listening on port ${PORT}.`);
});