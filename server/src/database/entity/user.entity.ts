export interface UserCreationDTO {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
}

export interface User extends UserCreationDTO{
    id: string;
    role: UserRole;
    createdOn: string;
    banned: boolean;
}

export enum UserRole {
    ADMIN, CUSTOMER, NONE
}