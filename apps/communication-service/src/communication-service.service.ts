import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from 'apps/api-gateway/src/events/createuser.event';

@Injectable()
export class CommunicationServiceService {
  getHello(): string {
    return 'Hello World!';
  }

  handleCreateUser(payload: CreateUserEvent) {
    console.log('handling user created', payload);
  }
}
