import { Request, Response } from "express";
import UserSchema from "../../models/UserSchema";

export const userProfileController = async (req: any, res: Response) => {
    try {
        const user: any = await UserSchema.findOne({ userId: req.user.userId })
        console.log(user)
        res.status(200).json({
            userId: user.userId,
            username: user.username,
            email: user.email,
            avatar: user.avatar
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}