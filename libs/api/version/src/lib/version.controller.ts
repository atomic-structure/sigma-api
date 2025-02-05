import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Version } from './version.entity';
import { CreateVersionDto } from './dto/create-version.dto';
import { VersionService } from './version.service';

@ApiTags('Version')
@Controller('version')
export class VersionController {
  constructor(private readonly service: VersionService) {}

  @Get()
  @ApiOperation({ summary: 'Get all versions' })
  @ApiResponse({ type: [Version] })
  findAll() {
    return this.service.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create new version' })
  @ApiResponse({ type: Version })
  create(@Body() dto: CreateVersionDto) {
    return this.service.create(dto);
  }
}
