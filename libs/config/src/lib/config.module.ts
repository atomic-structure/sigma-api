import { Module } from '@nestjs/common';
import { Config } from "./config";

@Module({
  controllers: [],
  providers: [],
  exports: [Config],
})
export class ConfigModule {}
