import { Injectable } from '@nestjs/common';

@Injectable()
export class SigmaService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
