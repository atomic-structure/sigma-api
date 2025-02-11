import { Injectable } from '@nestjs/common';
import { Deployment } from './deployment.entity';
import { CreateDeploymentDto } from './dto/create-deployment.dto';

@Injectable()
export class DeploymentService {
    private deployments: Deployment[] = [];

    findAll(): Deployment[] {
        return this.deployments;
    }

    findOne(id: string): Deployment {
        const results = this.deployments.filter((deployment, idx, acc) => { deployment.id === id });
        return results?.[0];
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
