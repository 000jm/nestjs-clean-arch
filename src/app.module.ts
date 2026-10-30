
import 'dotenv/config'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller.js'
import { AppService } from './app.service.js'
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module.js'
import { UsersModule } from './users/users.module.js';

@Module({
  imports: [EnvConfigModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
