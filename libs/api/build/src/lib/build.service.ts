import { Injectable } from '@nestjs/common';
import { Build } from './build.entity';
import { CreateBuildDto } from './dto/create-build.dto';

@Injectable()
export class BuildService {
  private builds: Build[] = [];

  findAll(): Build[] {
    return this.builds;
  }

  create(createBuildDto: CreateBuildDto): Build {
    const build = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: 'completed',
      ...createBuildDto
    };
    this.builds.push(build);
    return build;
  }
}
