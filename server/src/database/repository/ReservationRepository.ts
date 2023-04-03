import {IRepository} from "./IRepository.js";
import {QueryResult} from "pg";

export class ReservationRepository implements IRepository<any, any>{

    getAll(): Promise<QueryResult<any[]>> {
        return Promise.resolve(undefined);
    }

    getById(objectId: string): Promise<QueryResult<any>> {
        return Promise.resolve(undefined);
    }

    update(object: any): Promise<QueryResult<any>> {
        return Promise.resolve(undefined);
    }

    add(object: any): Promise<QueryResult<any>> {
        return Promise.resolve(undefined);
    }

}