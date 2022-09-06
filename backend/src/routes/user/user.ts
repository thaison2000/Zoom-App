import express from 'express'
import { userProfileController } from '../../controllers/user/user'
import verifyToken from '../../controllers/verifyToken'
const userRoute = express.Router()

userRoute.get('/',verifyToken,userProfileController)


export default userRoute