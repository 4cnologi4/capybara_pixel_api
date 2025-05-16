import { Injectable } from '@nestjs/common';
import { AppServiceInterface } from '../../domain/interfaces/app.service.interface';

@Injectable()
export class AppService implements AppServiceInterface {
  getHello(): string {
    return 'Hello World!';
  }
} 