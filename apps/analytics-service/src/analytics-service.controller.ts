import { Controller, Get } from '@nestjs/common';
import { AnalyticsServiceService } from './analytics-service.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserEvent } from './events/createuser.event';

@Controller()
export class AnalyticsServiceController {
  constructor(
    private readonly analyticsServiceService: AnalyticsServiceService,
  ) {}

  @Get()
  getHello(): string {
    return this.analyticsServiceService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(payload: CreateUserEvent) {
    this.analyticsServiceService.handleUserCreated(payload);
  }

  @MessagePattern({ cmd: 'get_analytics' })
  async getAnalytics() {
    return this.analyticsServiceService.getAnalytics();
  }
}
