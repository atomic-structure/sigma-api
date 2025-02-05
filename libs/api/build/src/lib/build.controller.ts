import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Build } from './build.entity';
import { CreateBuildDto } from './dto/create-build.dto';
import { BuildService } from './build.service';

@ApiTags('Build')
@Controller('build')
export class BuildController {
  constructor(private readonly service: BuildService) {}

  @Get()
  @ApiOperation({ summary: 'Get all builds' })
  @ApiResponse({ type: [Build] })
  findAll() {
    return this.service.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create new build' })
  @ApiResponse({ type: Build })
  create(@Body() dto: CreateBuildDto) {
    return this.service.create(dto);
  }
}
