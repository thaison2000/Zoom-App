import express from "express";
import { addMemberController, changeGroupMasterController, deleteMemberController } from "../../controllers/group/member";
import verifyToken from "../../controllers/verifyToken";

const memberRoute = express.Router()
memberRoute.post('/add',verifyToken,addMemberController)
memberRoute.post('/delete',verifyToken,deleteMemberController)
memberRoute.put('/master',verifyToken,changeGroupMasterController)

export default memberRoute