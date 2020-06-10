import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionModule } from './question/question.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost/nest'), QuestionModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
