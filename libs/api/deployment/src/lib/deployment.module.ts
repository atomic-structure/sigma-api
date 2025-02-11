import { Module } from '@nestjs/common';
import { DeploymentController } from "./deployment.controller";
import { DeploymentService  } from "./deployment.service";
import { DeploymentWebsocket } from './deployment.websocket';

@Module({
  controllers: [DeploymentController],
  providers: [DeploymentService, DeploymentWebsocket],
  exports: [DeploymentService],
})
export class DeploymentModule {}
