import { Module } from "@nestjs/common";
import { ChemicalGroupModuleBase } from "./base/chemicalGroup.module.base";
import { ChemicalGroupService } from "./chemicalGroup.service";
import { ChemicalGroupController } from "./chemicalGroup.controller";
import { ChemicalGroupResolver } from "./chemicalGroup.resolver";

@Module({
  imports: [ChemicalGroupModuleBase],
  controllers: [ChemicalGroupController],
  providers: [ChemicalGroupService, ChemicalGroupResolver],
  exports: [ChemicalGroupService],
})
export class ChemicalGroupModule {}
