import { Schema, model } from 'mongoose';
import { GroupInterface } from '../interface';

const GroupSchema = new Schema<GroupInterface>(
  {
    groupId: {
      type: String,
      require: true,
      unique: true,
    },
    groupName: {
        type: String,
        require: true,
        unique: true,
        default: ''
      },
    member: {
      type: [String],
    },
    masterId: {
        type: String,
        require: true,
        unique: true,
    },
    avatar: {
      type: String,
      default: '',
    }
  },
  { timestamps: true }
);

export default  model<GroupInterface>("Group", GroupSchema);