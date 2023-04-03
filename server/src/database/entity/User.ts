export interface UserCreationDTO {
    username: string;
    password: string;
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