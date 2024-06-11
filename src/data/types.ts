import { User } from '../entities/City'

export interface IUserSignUp {
    userName: string,
    password: string,
    email: string
    avatar: string,
    verifyPhoto: string,
    inviter?: User
}

export interface IUpdate {
    userId: string,
    userName?: string,
    password?: string,
    email?: string,
    avatar?: string,
    verify?: boolean,
    emailOTP?: boolean,
    verifyPhoto?: string,
}
