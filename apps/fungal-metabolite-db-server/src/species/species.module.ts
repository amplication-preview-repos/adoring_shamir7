import { Module } from "@nestjs/common";
import { SpeciesModuleBase } from "./base/species.module.base";
import { SpeciesService } from "./species.service";
import { SpeciesController } from "./species.controller";
import { SpeciesResolver } from "./species.resolver";

@Module({
  imports: [SpeciesModuleBase],
  controllers: [SpeciesController],
  providers: [SpeciesService, SpeciesResolver],
  exports: [SpeciesService],
})
export class SpeciesModule {}
