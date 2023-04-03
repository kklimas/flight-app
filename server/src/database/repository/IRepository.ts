import {QueryResult} from "pg";

export interface IRepository<T, R> {
    getAll(): Promise<QueryResult<T[]>>;
    getById(objectId: string): Promise<QueryResult<T>>;
    add(object: R): Promise<QueryResult<T>>;
    update(object: T): Promise<QueryResult<T>>;
}