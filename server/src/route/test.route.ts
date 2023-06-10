import express from "express";
import PingController from "../controller/test.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Book:
 *          type: object
 *          required:
 *              - title
 *              - author
*           properties:
 *              id:
 *                  type: string
 *                  description: Desc
*               title:
 *               type: string
 *
 */
router.get("/ping", async (_req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
});

export default router;
