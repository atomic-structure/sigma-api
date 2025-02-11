import { Controller, Get } from '@nestjs/common';
import { SigmaService } from './sigma.service';

@Controller()
export class SigmaController {
  constructor(private readonly sigmaService: SigmaService) {}

  @Get()
  getData() {
    return this.sigmaService.getData();
  }
}
