import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Deployment } from './deployment.entity';
import { CreateDeploymentDto } from './dto/create-deployment.dto';
import { DeploymentService } from './deployment.service';

@ApiTags('Deployment')
@Controller('deployment')
export class DeploymentController {
  constructor(private readonly service: DeploymentService) {}

  @Get()
  @ApiOperation({ summary: 'Get all deployments' })
  @ApiResponse({ type: [Deployment] })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get deployment by id' })
  @ApiResponse({ type: Deployment })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create new deployment' })
  @ApiResponse({ type: Deployment })
  create(@Body() dto: CreateDeploymentDto) {
    return this.service.create(dto);
  }
}
