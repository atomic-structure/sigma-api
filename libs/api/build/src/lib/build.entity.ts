import { ApiProperty } from '@nestjs/swagger';

export class Build {
  @ApiProperty()
  id: string;

  @ApiProperty()
  version: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  createdAt: string;
}
