import { Test, TestingModule } from '@nestjs/testing';
import { DeploymentService } from './deployment.service';
import { Deployment } from './deployment.entity';

describe('DeploymentService', () => {
  let service: DeploymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeploymentService],
    }).compile();

    service = module.get<DeploymentService>(DeploymentService);
  });

  it('should return all deployments', () => {
    const mockDeployments: Deployment[] = [
      { id: '1', name: 'Test Deployment 1', status: 'created', createdAt: new Date().toISOString() },
      { id: '2', name: 'Test Deployment 2', status: 'in-progress', createdAt: new Date().toISOString() }
    ];
    jest.spyOn(service, 'findAll').mockReturnValue(mockDeployments);

    const deployments = service.findAll();
    expect(deployments).toHaveLength(2);
    expect(deployments[0].name).toBe('Test Deployment 1');
  });

  it('should create a new deployment', () => {
    const newDeployment = { name: 'New Deployment', status: 'created' };
    const createdDeployment = service.create(newDeployment);

    expect(createdDeployment).toHaveProperty('id');
    expect(createdDeployment.name).toBe('New Deployment');
    expect(createdDeployment.status).toBe('created');
    expect(createdDeployment).toHaveProperty('createdAt');
  });
});
