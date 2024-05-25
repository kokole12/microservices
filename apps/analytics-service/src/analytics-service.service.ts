import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/createuser.event';

@Injectable()
export class AnalyticsServiceService {
  private readonly analytics: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(payload: CreateUserEvent) {
    console.log('handleUserCreated - ANALYTICS', payload.email);
    return this.analytics.push({ email: payload.email, timestamp: new Date() });
  }

  getAnalytics() {
    return this.analytics;
  }
}
