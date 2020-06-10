import { QuestionService } from './question/question.service';
import { WebSocketServer, SubscribeMessage, WebSocketGateway, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, WsResponse } from '@nestjs/websockets';
import { Logger, Injectable } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
@Injectable()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private questionService: QuestionService) {}
  @WebSocketServer() private server: any;
  private logger: Logger = new Logger('AppGateway');

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected ${client.id}`);
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected ${client.id}`);
  }

  afterInit(server: Server) {
    this.logger.log('Initialized');
  }

  @SubscribeMessage('msgToServer')
  async handleMessage(client: Socket, id: string) {
    const data =  await this.questionService.findQuestionById(id);
    this.server.emit('msgToClient', { data: data.question.reply });
  }
}
