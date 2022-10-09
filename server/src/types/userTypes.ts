export type RegisterAuth = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
}

export type LoginAuth = Omit<RegisterAuth, "firstName" | "lastName" | "age" | "confirmPassword">;