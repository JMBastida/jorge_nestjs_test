import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

/*
    WebSockets option for achiving first rule where no api calls for getting user status are permitted.
    In this test purpouse Case an option is to use the "client" param as user id because its unique
    (each connection generates new id, so user that leaves connection will trigger new id generation).
*/

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(/*private logger: Logger*/) {}
  private logger: Logger = new Logger('AppGateway');

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Diconnected: ${client.id}`);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleStatus(client: Socket, text: string): WsResponse<string> {
    console.log(text);
    return { event: 'statusForClient', data: text };
  }
}
