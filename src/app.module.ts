
import { Module } from '@nestjs/common'
import { AppController } from './app.controller.js'
import { AppService } from './app.service.js'
import { ConfigModule } from '@nestjs/config'
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module.js';

@Module({
  imports: [EnvConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
