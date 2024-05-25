import { Inject, Injectable } from '@nestjs/common';
import { CreatrUserDto } from './dto/createuser.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './events/createuser.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) {}
  private readonly users: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  createUser(body: CreatrUserDto) {
    this.users.push(body);
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(body.email),
    );
    this.analyticsClient.emit('user_created', new CreateUserEvent(body.email));
    return body;
  }

  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}
