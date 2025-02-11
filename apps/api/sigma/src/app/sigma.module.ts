import { Module } from '@nestjs/common';
import { SigmaController } from './sigma.controller';
import { SigmaService } from './sigma.service';
import { DeploymentModule } from '@sigma-api/deployment';
import { BuildModule } from '@sigma-api/build';
import { VersionModule } from '@sigma-api/version';
import { HealthModule } from '@sigma-api/health';
import { Config } from "@sigma-api/config";
import { sigmaApiConfigSchema } from "./config/schema";

@Module({
  imports: [DeploymentModule, BuildModule, VersionModule, HealthModule],
  controllers: [SigmaController],
  providers: [SigmaService, {
    provide: Config,
    useFactory: () => new Config('sigma-api', sigmaApiConfigSchema)
  }],
})
export class SigmaModule {}
