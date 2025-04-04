import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chats')
export class ChatController {
     constructor(private readonly chatService: ChatService) { }

     @Get()
     getHello(): string {
          return this.chatService.getHello();
     }
}
