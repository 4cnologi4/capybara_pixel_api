import { Module } from '@nestjs/common';
import { AppController } from './infrastructure/controllers/app.controller';
import { AppService } from './application/services/app.service';
import { UserService } from './application/services/user.service';
import { MongoUserRepository } from './infrastructure/repositories/mongo.user.repository';
import { CapybaraController } from './infrastructure/controllers/capybara.controller';
import { CapybaraService } from './application/services/capybara.service';
import { CapybaraRepository } from './infrastructure/repositories/capybara.repository';
import { USER_REPOSITORY, CAPYBARA_REPOSITORY } from './core/constants/repository-tokens.constants';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60000, // Time window in milliseconds (1 minute)
      limit: 100, // Max requests per window
    }]),
  ],
  controllers: [AppController, CapybaraController],
  providers: [
    AppService,
    UserService,
    {
      provide: USER_REPOSITORY,
      useClass: MongoUserRepository,
    },
    CapybaraService,
    {
      provide: CAPYBARA_REPOSITORY,
      useClass: CapybaraRepository,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
