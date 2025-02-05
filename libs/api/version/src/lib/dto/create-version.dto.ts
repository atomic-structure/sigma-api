import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateVersionDto {
  @ApiProperty()
  @IsString()
  number: string;

  @ApiProperty()
  releaseDate?: string;
}
