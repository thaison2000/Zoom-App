import { Response } from "express";
import { GroupInterface } from "../../interface";
import { v4 as uuid } from 'uuid';
import GroupSchema from "../../models/GroupSchema";


export const createGroupController = async (req: any, res: Response)=>{
    try{
        const group: GroupInterface = {
            groupId: `${uuid()}${Date.now()}`,
            member: [req.user.userId],
            masterId: req.user.userId,
            avatar: ''
        }
    
        let newGroup = await GroupSchema.create(group)
        res.status(200).json(newGroup)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export const deleteGroupController = async (req: any, res: Response)=>{
    try{  
        let deleteGroup = await GroupSchema.findOneAndDelete({
            groupId: req.body.groupId,
            masterId: req.user.userId
        })
        res.status(200).json(deleteGroup)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

