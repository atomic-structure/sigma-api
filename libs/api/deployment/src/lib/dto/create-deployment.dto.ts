import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDeploymentDto {
  @ApiProperty()
  @IsString()
  name: string;
}