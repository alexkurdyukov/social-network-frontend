// интерфейс запроса на получение токена авторизации
export interface ILoginRequest {
    email: string;
    password: string;
}

// ответ с сервера на запрос на получение токена авторизации
export interface ILoginResponse {
    token: string;
}

export interface IRegisterRequest {
    name: string;
    password: string;
    email: string;
}

export interface IRegisterResponse {
    name: string;
    password: string;
    email: string;
}

export interface IUpdateUserRequest {
    userData: FormData;
    id: string;
}
