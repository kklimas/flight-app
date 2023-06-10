import * as OperationService from "../service/operation.service.js";
import LogProvider from "../provider/log.provider.js";

export const findPaymentTransactions = (req, res) => {
    OperationService.findPaymentTransactions()
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}

export const findUserReservationTransactions = (req, res) => {
    OperationService.findUserReservationTransactions(req.params.id)
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
        LogProvider.error(err);
        res.sendStatus(400);
    });
}