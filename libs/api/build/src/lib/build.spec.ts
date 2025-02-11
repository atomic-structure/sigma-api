import { Test, TestingModule } from '@nestjs/testing';
import { BuildService } from './build.service';

describe('BuildsService', () => {
  let service: BuildService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildService],
    }).compile();

    service = module.get<BuildService>(BuildService);
  });

  it('should return all builds', () => {
    const builds = service.findAll();
    expect(builds).toBeInstanceOf(Array);
  });

  it('should create a new build', () => {
    const newBuild = service.create({ version: '1.0.0' });
    expect(newBuild).toHaveProperty('id');
    expect(newBuild).toHaveProperty('version', '1.0.0');
  });
});
