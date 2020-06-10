import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  role: {
    type: Number,
    default: 2 // 1 - Admin, 2 - Owner
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

UserSchema.pre('save', async function (next: mongoose.HookNextFunction) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});