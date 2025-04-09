import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('test-cors')
  testCors(@Body() data: any): any {
    return {
      message: 'CORS request successful',
      receivedData: data,
      timestamp: new Date().toISOString()
    };
  }
}
