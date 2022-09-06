import express from 'express'
const app = express();

import { connect } from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan';
import * as path from 'path'
import authRoute from './routes/user/auth';
import bodyParser from 'body-parser';
import userRoute from './routes/user/user';

dotenv.config();

connect(
  `${process.env.MONGO_URL}`
).then((db) => {
  console.log("Database Connected Successfuly.");
})
  .catch((err) => {
    console.log(err)
    console.log("Error Connecting to the Database");
  });;

app.use("/images", express.static(path.join(__dirname, "public/images")));
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)


app.listen(3030, () => {
  console.log("Server is running!");
});