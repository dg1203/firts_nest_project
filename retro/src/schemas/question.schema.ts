import * as mongoose from 'mongoose';

export const QuestionSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: String,
  time: {
    type: Number,
    default: 300000, // 5 - min
  },
  code: String,
  open: Boolean,
  created: {
    type: Date,
    default: Date.now(),
  },
  type: String,
  options: [String],
  reply: [String],
});
