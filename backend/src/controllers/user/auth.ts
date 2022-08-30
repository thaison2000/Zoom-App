import express from 'express'
const authRoute = express.Router()

import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import { v4 as uuid } from 'uuid';
import UserModel from '../../models/UserSchema'
import { registerValidation, loginValidation } from '../validation'
import { Request, Response } from 'express'
import { UserInterface } from '../../interface'

//register
authRoute.post('/register', async (req: Request, res: Response) => {

    try {

        // validate data before saving a user
        const { error } = registerValidation({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        if (error) {
            return res.status(400).json(error.details[0].message)
        }

        //check match password
        if (req.body.password != req.body.againPassword) {
            return res.status(400).json('Password is not matching !')
        }

        // checking user exist or not
        const emailExist = await UserModel.findOne({ email: req.body.email })
        if (emailExist) {
            return res.status(400).json('Email already exist')
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        // create new user
        const user: UserInterface = {
            userId: `${uuid()}${Date.now()}`,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
            avatar: ''
        }
        let newUser = await UserModel.create(user)
        res.status(200).json({
            userId: newUser.userId,
            email: newUser.email,
            username: newUser.username,
        })

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

// LOGIN
authRoute.post('/login', async (req: Request, res: Response) => {
    try {

        // validate data before logged in
        const { error } = loginValidation(req.body)
        if (error) {
            return res.status(400).json(error.details[0].message)
        }

        // checking email exist or not
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).json('Email is not found!')
        }
        console.log(user)

        // checking password
        const validPass = await bcrypt.compare(req.body.password, user.password)
        if (!validPass) {
            return res.status(400).json('Invalid password')
        }

        // Create and assign token
        const token = jwt.sign({ user_id: user.userId }, `${process.env.TOKEN_SECRET}`)

        res.status(200).json({
            userId: user.userId,
            username: user.username,
            email: user.email,
            jwt: token
        })
    }
    catch (err) {
        res.status(500).json(err)
    }

})

//send code for reset password
authRoute.post('/sendToken', function (req, res) {
    try {
        var transporter = nodemailer.createTransport({ // config mail server
            service: 'Gmail',
            auth: {
                user: 'son.dt1408@gmail.com',
                pass: 'wbmkmwflsmeipcfs'
            }
        });

        const receiverEmail: string = req.body.receiverEmail

        //generate token
        const changePasswordToken = jwt.sign({ receiverEmail: receiverEmail }, `${process.env.TOKEN_SECRET}`)

        var mainOptions = { // config options, mail content
            from: 'thaison',
            to: 'dhhyb1@gmail.com',
            subject: 'Change Password',
            text: `Token to change password : ${changePasswordToken}`
        }
        transporter.sendMail(mainOptions, function (err, info) {
            if (err) {
                console.log(err);
                res.status(500).json(err)
            } else {
                console.log('Message sent: ' + info.response);
                res.status(200).json({
                    receiverEmail: receiverEmail,
                    changePasswordToken: changePasswordToken
                })
            }
        });
    }
    catch (err) {
        res.status(500).json(err)
    }
});

//check code for reset password
authRoute.post('/checkToken', function (req, res) {
    try {
        const changePasswordToken: string = req.body.changePasswordToken
        const receiverEmail: string = req.body.receiverEmail

        //check token
        const verified = jwt.verify(changePasswordToken, `${process.env.TOKEN_SECRET}`)
        console.log(verified)


    }
    catch (err) {
        res.status(500).json(err)
    }
});

export default authRoute