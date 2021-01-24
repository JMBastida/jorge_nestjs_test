import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsersService } from './users.service';

/*
    WebSockets option for achiving first rule where no api calls for getting user status are permitted.
    In this test purpouse Case an option is to use the "client" param as user id because its unique
    (each connection generates new id, so user that leaves connection will trigger new id generation).
*/

@WebSocketGateway()
export class UserGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private userService: UsersService) {}
  private logger: Logger = new Logger('UserGateway');
  online: Date;
  offline: Date;

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Connected: ${client.id}`);
    this.online = new Date();
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Diconnected: ${client.id}`);
    this.offline = new Date();
    this.userService.update(client.id, {
      initTime: this.online,
      finishTime: this.offline,
    });
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleStatus(client: Socket, text: string): WsResponse<string> {
    console.log(text);
    return { event: 'statusForClient', data: text };
  }
}
