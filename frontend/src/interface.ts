export interface registerUserInterface{
    username: string,
    email: string,
    password: string,
    againPassword: string
}

export interface loginUserInterface{
    email: string,
    password: string,
}

export interface userProfileInterface{
    email: string,
    username: string,
    avatar: string
}