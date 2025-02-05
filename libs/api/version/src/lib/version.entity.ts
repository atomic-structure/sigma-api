import { ApiProperty } from '@nestjs/swagger';

export class Version {
  @ApiProperty()
  id: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  releaseDate: string;

  @ApiProperty()
  createdAt: string;
}
