import { Injectable } from '@nestjs/common';
import { Deployment } from './deployment.entity';
import { CreateDeploymentDto } from './dto/create-deployment.dto';

@Injectable()
export class DeploymentService {
    private deployments: Deployment[] = [];

    findAll(): Deployment[] {
        return this.deployments;
    }

    create(dto: CreateDeploymentDto): Deployment {
        const deployment: Deployment = {
            id: crypto.randomUUID(),
            name: dto.name,
            status: 'created',
            createdAt: new Date().toISOString(),
        };

        this.deployments.push(deployment);
        return deployment;
    }
}
