import {QueryResult, QueryResultRow} from "pg";

export interface IRepository<T extends QueryResultRow, R> {
    getAll(): Promise<QueryResult<T[]>>;
    getById(objectId: number): Promise<QueryResult<T>>;
    add(object: R): Promise<QueryResult<T>>;
}