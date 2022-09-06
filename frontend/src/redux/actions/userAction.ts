import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { loginUserInterface, registerUserInterface, userProfileInterface } from "../../interface"

export const userRegister = createAsyncThunk(
    'user/register',
    async ({ username, email, password, againPassword }: registerUserInterface) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                'http://localhost:3030/api/auth/register',
                { username, email, password, againPassword },
                config
            )
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                console.log(error.response.data.message)
            } else {
                console.log(error.message)
            }
        }
    }
)

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }: loginUserInterface) => {
        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                'http://localhost:3030/api/auth/login',
                { email, password },
                config
            )
            localStorage.setItem('userToken', data.jwt)
            return data.jwt
        } catch (error: any) {

            if (error.response && error.response.data.message) {
                console.log(error.response.data.message)
            } else {
                console.log(error.message)
            }
        }
    }
)


export const userProfile = createAsyncThunk(
    'user/profile',
    async () => {
        try {
            const token: string = localStorage.getItem('userToken') || ''
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
            }
            const { data } = await axios.get(
                'http://localhost:3030/api/user/',
                config
            )
            return data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                console.log(error.response.data.message)
            } else {
                console.log(error.message)
            }
        }
    }
)
