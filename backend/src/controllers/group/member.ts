import { Response } from "express";
import GroupSchema from "../../models/GroupSchema";

//add member
export const addMemberController = async (req: any, res: Response)=>{
    try{
        const group = await GroupSchema.findOne({
            groupId: req.body.groupId
        })
        if(!group){
            return res.status(500).json('Can not find group !')
        }
        
        await group.updateOne({ $push: { member: req.body.userId } });
        res.status(200).json('Add member successfully !')
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

//delete member
export const deleteMemberController = async (req: any, res: Response)=>{
    try{
        const group = await GroupSchema.findOne({
            groupId: req.body.groupId
        })
        if(!group){
            return res.status(500).json('Can not find group !')
        }
        
        await group.updateOne({ $pull: { member: req.body.userId } });
        res.status(200).json('Delete member successfully !')
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

//change master
export const changeGroupMasterController = async (req: any, res: Response)=>{
    try{
        const group = await GroupSchema.findOne({
            groupId: req.body.groupId
        })
        if(!group){
            return res.status(500).json('Can not find group !')
        }
        if(group.masterId !== req.user.userId){
            return res.status(403).json('You do not have permission !')
        }
        
        await group.updateOne({ masterId: req.body.userId });
        res.status(200).json('Change group master successfully !')
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}