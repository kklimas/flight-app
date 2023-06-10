import {QueryResult} from "pg";

export interface IRepository<T, R> {
    getAll(): Promise<QueryResult<T[]>>;
    getById(objectId: number): Promise<QueryResult<T>>;
    add(object: R): Promise<QueryResult<T>>;
}