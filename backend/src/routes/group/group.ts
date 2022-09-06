import express from "express";
import multer from "multer";
import { createGroupController, deleteGroupController, editGroupController, getGroupsController } from "../../controllers/group/group";
import verifyToken from "../../controllers/verifyToken";

//upload image
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/public/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const imageUpload = multer({ storage: imageStorage });

const groupRoute = express.Router()

groupRoute.get('/',verifyToken,getGroupsController)
groupRoute.post('/', verifyToken, createGroupController)
groupRoute.delete('/:groupId/', verifyToken, deleteGroupController)
groupRoute.put('/', verifyToken, imageUpload.single('file'), editGroupController)

export default groupRoute