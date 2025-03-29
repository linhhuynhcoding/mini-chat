/* eslint-disable @typescript-eslint/no-unused-vars */

import {
     ConnectedSocket,
     MessageBody,
     OnGatewayConnection,
     OnGatewayDisconnect,
     OnGatewayInit,
     SubscribeMessage,
     WebSocketGateway,
     WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
     cors: {
          origin: '*',
     },
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
     @WebSocketServer()
     server: Server;
     constructor() { }

     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     afterInit(server: Socket) {
          console.log('Server initialized');
     }

     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     handleConnection(client: Socket, ...args: any[]) {
          console.log('Client connected ' + client.id);
     }

     handleDisconnect(client: Socket) {
          console.log('Client disconnected ' + client.id);
     }

     @SubscribeMessage('events')
     handleEvent(client: Socket, data: string): string {
          console.log('Event received: ' + data);
          return data;
     }
}
