import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBuildDto {
  @ApiProperty()
  @IsString()
  version: string;
}
