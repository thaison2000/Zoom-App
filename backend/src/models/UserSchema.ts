import { Schema, model } from 'mongoose';
import { UserInterface } from '../interface';

const UserSchema = new Schema<UserInterface>(
  {
    userId: {
      type: String,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    avatar: {
      type: String,
      default: "",
    }
  },
  { timestamps: true }
);

export default  model<UserInterface>("User", UserSchema);