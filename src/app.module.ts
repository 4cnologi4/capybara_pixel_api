import { Module } from '@nestjs/common';
import { AppController } from './infrastructure/controllers/app.controller';
import { AppService } from './application/services/app.service';
import { UserService } from './application/services/user.service';
import { MongoUserRepository } from './infrastructure/repositories/mongo.user.repository';
import { CapybaraController } from './infrastructure/controllers/capybara.controller';
import { CapybaraService } from './application/services/capybara.service';
import { MockCapybaraRepository } from './infrastructure/repositories/mock-capybara.repository';

// Add this line to create a token for the interface
export const USER_REPOSITORY = 'USER_REPOSITORY';

// Define a token for the repository
export const CAPYBARA_REPOSITORY = 'CAPYBARA_REPOSITORY';

@Module({
  imports: [],
  controllers: [AppController, CapybaraController],
  providers: [
    AppService,
    UserService,
    {
      provide: 'USER_REPOSITORY', // Match the token used in @Inject()
      useClass: MongoUserRepository,
    },
    CapybaraService,
    {
      provide: 'CAPYBARA_REPOSITORY', // Use the token
      useClass: MockCapybaraRepository,
    },
  ],
})
export class AppModule {}
