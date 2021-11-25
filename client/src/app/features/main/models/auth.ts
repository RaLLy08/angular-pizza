export type Login = {
    phone: string;
    password: string;
}

export type LoginResponse = {
    accessToken: string;
    user: {
        phone: string;
        id: string;
        role: string;
    }
}