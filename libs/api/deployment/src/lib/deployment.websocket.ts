import { AsyncApiSub } from 'nestjs-asyncapi';
import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { DeploymentService } from './deployment.service';
import { CreateDeploymentDto } from './dto/create-deployment.dto';

@WebSocketGateway({
    namespace: '/deployments',
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})
export class DeploymentWebsocket {
    @WebSocketServer()
    server: Server;

    constructor(private readonly deploymentService: DeploymentService) { }

    @AsyncApiSub({
        channel: 'requestDeploymentStatus',
        message: {
          payload: 'deploymentId'
        }
      })
    @SubscribeMessage('requestDeploymentStatus')
    async handleStatusRequest(@MessageBody() deploymentId: string) {
        const deployment = await this.deploymentService.findOne(deploymentId);
        this.server.emit('deploymentStatus', { ...deployment });
    }

    @AsyncApiSub({
        channel: 'triggerDeployment',
        message: {
          payload: CreateDeploymentDto
        }
      })
    @SubscribeMessage('triggerDeployment')
    async handleDeployment(@MessageBody() dto: CreateDeploymentDto) {
        const deployment = await this.deploymentService.create(dto);
        this.server.emit('deploymentProgress', {
            ...deployment
        });
    }
}
