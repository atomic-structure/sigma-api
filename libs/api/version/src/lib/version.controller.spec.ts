import { Test, TestingModule } from '@nestjs/testing';
import { VersionController } from './version.controller';
import { VersionService } from './version.service';
import { Version } from './version.entity';
import { CreateVersionDto } from './dto/create-version.dto';

describe('VersionsController', () => {
  let controller: VersionController;
  let service: VersionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersionController],
      providers: [VersionService],
    }).compile();

    controller = module.get<VersionController>(VersionController);
    service = module.get<VersionService>(VersionService);
  });

  describe('findAll', () => {
    it('should return an array of versions', async () => {
      const result: Version[] = [
        { id: '1', number: '1.0.0', releaseDate: '2023-01-01', createdAt: '2023-01-01T00:00:00Z' },
        { id: '2', number: '1.1.0', releaseDate: '2023-02-01', createdAt: '2023-02-01T00:00:00Z' },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a new version', async () => {
      const createVersionDto: CreateVersionDto = { number: '2.0.0', releaseDate: '2023-03-01' };
      const expectedResult: Version = {
        id: '3',
        ...createVersionDto,
        createdAt: '2023-03-01T00:00:00Z',
      };
      
      jest.spyOn(service, 'create').mockImplementation(() => expectedResult);

      expect(await controller.create(createVersionDto)).toBe(expectedResult);
    });
  });
});
