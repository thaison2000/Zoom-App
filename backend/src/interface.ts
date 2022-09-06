export interface UserInterface {
    userId: string,
    email: string,
    username: string,
    password: string,
    avatar: string
}

export interface UserLoginInterface {
    email: string,
    password: string,
}

export interface UserRegisterInterface {
    email: string,
    username: string,
    password: string,
}

export interface GroupInterface {
    groupId: string,
    groupName: string,
    masterId: string,
    member: Array<string>,
    avatar: string
}