import express from 'express';
import * as OperationController from '../controller/operation.controller.js';


export const operationRoute = express.Router();

operationRoute.get('/user/:id', OperationController.findUserReservationTransactions);
operationRoute.get('/payments', OperationController.findPaymentTransactions);
