export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}