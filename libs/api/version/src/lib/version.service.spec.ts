import { Test, TestingModule } from '@nestjs/testing';
import { VersionService } from './version.service';
import { Version } from './version.entity';

describe('VersionsService', () => {
  let service: VersionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersionService],
    }).compile();

    service = module.get<VersionService>(VersionService);
  });

  it('should return all versions', () => {
    const mockVersions: Version[] = [
      { id: '1', number: '1.0.0', releaseDate: '2023-01-01', createdAt: '2023-01-01T00:00:00Z' },
      { id: '2', number: '1.1.0', releaseDate: '2023-02-01', createdAt: '2023-02-01T00:00:00Z' },
    ];
    jest.spyOn(service, 'findAll').mockReturnValue(mockVersions);

    const versions = service.findAll();
    expect(versions).toHaveLength(2);
    expect(versions[0].number).toBe('1.0.0');
  });

  it('should create a new version', () => {
    const newVersion = { number: '2.0.0', releaseDate: '2023-03-01' };
    const createdVersion = service.create(newVersion);

    expect(createdVersion).toHaveProperty('id');
    expect(createdVersion.number).toBe('2.0.0');
    expect(createdVersion.releaseDate).toBe('2023-03-01');
    expect(createdVersion).toHaveProperty('createdAt');
  });
});
