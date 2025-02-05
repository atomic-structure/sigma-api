import { Injectable } from '@nestjs/common';
import { Version } from './version.entity';
import { CreateVersionDto } from './dto/create-version.dto';

@Injectable()
export class VersionService {
  private versions: Version[] = [];

  findAll(): Version[] {
    return this.versions;
  }

  create(createVersionDto: CreateVersionDto): Version {
    const version: Version = {
        id: crypto.randomUUID(),
        number: createVersionDto.number,
        releaseDate: createVersionDto.releaseDate || 'none',
        createdAt: new Date().toISOString(),
    };
    this.versions.push(version);
    return version;
  }
}
