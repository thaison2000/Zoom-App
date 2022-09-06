import { Response } from "express";
import { GroupInterface } from "../../interface";
import { v4 as uuid } from 'uuid';
import GroupSchema from "../../models/GroupSchema";

//get all group by user Id
export const getGroupsController = async (req: any, res: Response) => {
    try {
        const groups = await GroupSchema.find()
        let userGroups = []
        for (let i = 0; i < groups.length; i++) {
            for (let j = 0; j < groups[i].member.length; j++) {
                if (groups[i].member[j] == req.user.userId) {
                    userGroups.push(groups[i])
                }
            }
        }
        res.status(200).json(userGroups)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

//create group
export const createGroupController = async (req: any, res: Response) => {
    try {
        const group: GroupInterface = {
            groupId: `${uuid()}${Date.now()}`,
            groupName: req.body.groupName,
            member: [req.user.userId],
            masterId: req.user.userId,
            avatar: ''
        }

        let newGroup = await GroupSchema.create(group)
        res.status(200).json(newGroup)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

//delete group
export const deleteGroupController = async (req: any, res: Response) => {
    try {
        const group = await GroupSchema.findOne({
            groupId: req.params.groupId
        })
        if (!group) {
            return res.status(500).json('Can not find group !')
        }
        if (group?.masterId !== req.user.userId) {
            return res.status(403).json('you do not have permission !')
        }
        await GroupSchema.findOneAndDelete({
            groupId: req.params.groupId,
            masterId: req.user.userId
        })
        res.status(200).json('Delete group successfully !')
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

//edit group
export const editGroupController = async (req: any, res: Response) => {
    try {
        const editGroup = await GroupSchema.findOneAndUpdate(
            {
                groupId: req.body.groupId
            },
            {
                groupName: req.body.groupName,
                avatar: '/images/' + req.file.originalname
            }
        )
        res.status(200).json(editGroup)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

