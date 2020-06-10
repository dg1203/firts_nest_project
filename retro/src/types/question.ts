import { Document } from 'mongoose';

export interface Question extends Document {
  author: string;
  name: string;
  time: number;
  code: string;
  open: boolean;
  created: Date;
  type: string;
  options: [string];
  reply: [string];
}
