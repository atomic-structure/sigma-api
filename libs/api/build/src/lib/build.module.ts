import { Module } from '@nestjs/common';
import { BuildController } from './build.controller';
import { BuildService } from './build.service';

@Module({
  controllers: [BuildController],
  providers: [BuildService],
  exports: [BuildService]
})

export class BuildModule {}
