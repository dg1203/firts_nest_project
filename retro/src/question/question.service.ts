import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from '../types/question';
import { QuestionDto } from './dto/question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel('Question') private questionModel: Model<Question>,
  ) {}

  async create(questionDto: QuestionDto) {
    const { code } = questionDto;
    const question = await this.questionModel.findOne({ code });
    if (question) {
      throw new HttpException(
        'This code has already used.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const createdQuestion = new this.questionModel(questionDto);
    await createdQuestion.save();
    return {
      success: true,
      message: 'Question was created.',
    };
  }

  async createByLogged(questionDto: QuestionDto, user: any) {
    if (!user) {
      throw new HttpException(
        'You must logged in first.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const { code } = questionDto;
    const question = await this.questionModel.findOne({ code });
    if (question) {
      throw new HttpException(
        'This code has already used.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const createdQuestion = new this.questionModel({
      ...questionDto,
      author: user.userId,
    });
    await createdQuestion.save();
    return {
      success: true,
      message: 'Question was created.',
    };
  }

  async findQuestionByCode(code: string) {
    const question = await this.questionModel.findOne({ code });
    if (question) {
      if (question.open) {
        return {
          question
        };
      } else {
        throw new HttpException(
          'This question is close.',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    throw new HttpException('Your code is wrong.', HttpStatus.BAD_REQUEST);
  }

  async findQuestionById(id: string) {
    const question = await this.questionModel.findOne({ _id: id });
    if (question) {
      return {
        question
      };
    }

    throw new HttpException('Question not found.', HttpStatus.BAD_REQUEST);
  }

  async findMyQuestions(user: any) {
    if (user) {
      const questions = await this.questionModel.find({ author: user.userId });
      return questions;
    }

    throw new HttpException(
      'You must logged in first.',
      HttpStatus.BAD_REQUEST,
    );
  }

  async findById(id: string, user: any) {
    if (user) {
      const question = await this.questionModel.findOne({
        _id: id,
        author: user.userId,
      });
      if (question) {
        return question;
      }
      throw new HttpException(
        'Question does not exists.',
        HttpStatus.BAD_REQUEST,
      );
    }

    throw new HttpException(
      'You must logged in first.',
      HttpStatus.BAD_REQUEST,
    );
  }

  async addAnswear(id: string, data: any) {
    try {
      await this.questionModel.update(
        { _id: id },
        { $push: { reply: data.answear } },
      );
      return {
        success: true,
        message: 'Answear was sent.',
      };
    } catch (e) {
      throw new HttpException('Something went wrong.', HttpStatus.BAD_REQUEST);
    }
  }
}
