import * as OperationService from "../service/operation.service.js";
import LogProvider from "../provider/log.provider.js";
import {Request, Response} from "express";

export const findPaymentTransactions = (req: Request, res: Response) => {
    OperationService.findPaymentTransactions()
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}

export const findUserReservationTransactions = (req: Request, res: Response) => {
    OperationService.findUserReservationTransactions(parseInt(req.params.id))
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}