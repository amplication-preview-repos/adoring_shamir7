import { Module } from "@nestjs/common";
import { MetaboliteModuleBase } from "./base/metabolite.module.base";
import { MetaboliteService } from "./metabolite.service";
import { MetaboliteController } from "./metabolite.controller";
import { MetaboliteResolver } from "./metabolite.resolver";

@Module({
  imports: [MetaboliteModuleBase],
  controllers: [MetaboliteController],
  providers: [MetaboliteService, MetaboliteResolver],
  exports: [MetaboliteService],
})
export class MetaboliteModule {}
