import { Document } from 'mongoose';

export interface User extends Document {
  name: string;
  surname: string;
  passwrod: string;
  email: string;
  role: number;
  created: Date;
}