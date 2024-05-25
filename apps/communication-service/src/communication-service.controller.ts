import { Controller, Get } from '@nestjs/common';
import { CommunicationServiceService } from './communication-service.service';
import { CreateUserEvent } from 'apps/api-gateway/src/events/createuser.event';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class CommunicationServiceController {
  constructor(
    private readonly communicationServiceService: CommunicationServiceService,
  ) {}

  @Get()
  getHello(): string {
    return this.communicationServiceService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(payload: CreateUserEvent) {
    this.communicationServiceService.handleCreateUser(payload);
  }
}
