import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeploymentModule } from '@sigma-api/deployment';
import { BuildModule } from '@sigma-api/build';
import { VersionModule } from '@sigma-api/version';
import { HealthModule } from '@sigma-api/health';

@Module({
  imports: [DeploymentModule, BuildModule, VersionModule, HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
