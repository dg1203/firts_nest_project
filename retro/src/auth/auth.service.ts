import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../types/user';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private readonly jwtService: JwtService
  ) {}

  async create(registerDto: RegisterDto) {
    const { email } = registerDto;
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new HttpException('User already exists.', HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.userModel(registerDto);
    await createdUser.save();
    return {
      success: true,
      message: 'Registration was successful. Now You can login.'
    };
  }


  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new HttpException('Invalid credentials.', HttpStatus.UNAUTHORIZED);
    }
    if(await bcrypt.compare(password, user.password)) {
      const payload = { email: user.username, id: user.id };
      return {
        accessToken: this.jwtService.sign(payload),
        userEmail: user.email,
        userRole: user.role,
        userName: user.name,
        userSurname: user.surname,
        userId: user._id
      };
    } else {
      throw new HttpException('Invalid credentials.', HttpStatus.UNAUTHORIZED);
    }
  }

  async current(id: string) {
    const user = await this.userModel.findById({_id: id});
    if (user) {
      return {
        userEmail: user.email,
        userRole: user.role,
        userName: user.name,
        userSurname: user.surname,
        userId: user._id
      }
    }
    return null;
  }
}
