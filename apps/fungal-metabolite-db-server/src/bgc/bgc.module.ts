import { Module } from "@nestjs/common";
import { BgcModuleBase } from "./base/bgc.module.base";
import { BgcService } from "./bgc.service";
import { BgcController } from "./bgc.controller";
import { BgcResolver } from "./bgc.resolver";

@Module({
  imports: [BgcModuleBase],
  controllers: [BgcController],
  providers: [BgcService, BgcResolver],
  exports: [BgcService],
})
export class BgcModule {}
