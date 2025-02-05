import { Controller, Get, Post, Body } from '@nestjs/common';
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

  @Post()
  @ApiOperation({ summary: 'Create new deployment' })
  @ApiResponse({ type: Deployment })
  create(@Body() dto: CreateDeploymentDto) {
    return this.service.create(dto);
  }
}
