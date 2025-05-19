import { Module } from '@nestjs/common';
import { AppController } from './infrastructure/controllers/app.controller';
import { AppService } from './application/services/app.service';
import { UserService } from './application/services/user.service';
import { MongoUserRepository } from './infrastructure/repositories/mongo.user.repository';
import { CapybaraController } from './infrastructure/controllers/capybara.controller';
import { CapybaraService } from './application/services/capybara.service';
import { MockCapybaraRepository } from './infrastructure/repositories/mock-capybara.repository';
import { USER_REPOSITORY, CAPYBARA_REPOSITORY } from './core/constants/repository-tokens.constants';

@Module({
  imports: [],
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
      useClass: MockCapybaraRepository,
    },
  ],
})
export class AppModule {}
