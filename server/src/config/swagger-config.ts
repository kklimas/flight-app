export const swaggerConfig = {
    definition: {
        swagger: "2.0",
        openapi: "3.1.0",
        info: {
            title: "Flight system API documentation.",
            version: "1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: "http://localhost:8099",
            },
        ],
    },
    apis: ["../controller/*.ts"],
    "paths": {
        "/test": {
            "get": {
                "operationId": "GetTestMessage",
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                },
                "security": [],
                "parameters": []
            }
        }
    },
    "servers": [
        {
            "url": "/"
        }
    ]
};