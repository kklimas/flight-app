import express from "express";
import TestController from "../controller/test.controller.js";

export const testRoute = express.Router();

testRoute.get('', async (req, res) => {
    const controller = new TestController();
    const response = await controller.getTestMessage();
    res.send(response)
})