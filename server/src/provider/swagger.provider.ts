// documentation
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import {Express, Request, Response} from "express";
import LogProvider from "./log.provider.js";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Airplane flights application API",
            version: "1.0.0",
            description: "Automatically generated API for the flight-system application."
        },
        servers: [
            {
                url: 'https://localhost:8099'
            }
        ],
    },
    apis: ['../route/test.route.ts']
}

const swaggerSpec = swaggerJSDoc(options);


export const swaggerDocs = (app: Express, port: number) => {
    app.use(
        "/docs",
        swaggerUI.serve,
        swaggerUI.setup(swaggerSpec));
    app.get('docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    })

    LogProvider.info(`Docs available at http://localhost:${port}/docs`);
}