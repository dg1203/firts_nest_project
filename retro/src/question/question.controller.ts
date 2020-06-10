import {Body, Controller, Get, Patch, Param, Post, Request, UseGuards} from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionDto } from './dto/question.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post('create')
  async create(@Body() questionDto: QuestionDto, @Request() req) {
    return await this.questionService.create(questionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('createByLogged')
  async createByLogged(@Body() questionDto: QuestionDto, @Request() req) {
    return await this.questionService.createByLogged(questionDto, req.user);
  }

  @Get('findQuestionByCode/:code')
  async findQuestionByCode(@Param('code') code: string) {
    return await this.questionService.findQuestionByCode(code);
  }

  @Get('findQuestionById/:id')
  async findAnswearsByCode(@Param('id') id: string) {
    return await this.questionService.findQuestionById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('myQuestions')
  async findMyQuestions(@Request() req) {
    return await this.questionService.findMyQuestions(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('findMyQuestionById/:id')
  async findById(@Param('id') id:string ,@Request() req) {
    return await this.questionService.findById(id, req.user);
  }

  @Patch('addAnswear/:id')
  async addAnswear(@Param('id') id:string, @Body() data: any) {
    return await this.questionService.addAnswear(id, data);
  }
}
