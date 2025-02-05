import { ApiProperty } from '@nestjs/swagger';

export class Deployment {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  createdAt: string;
}
