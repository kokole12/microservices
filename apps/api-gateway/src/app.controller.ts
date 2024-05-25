import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatrUserDto } from './dto/createuser.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() body: CreatrUserDto) {
    return this.appService.createUser(body);
  }

  @Get('/analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
