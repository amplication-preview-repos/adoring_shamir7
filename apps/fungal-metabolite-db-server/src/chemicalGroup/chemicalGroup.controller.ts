import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChemicalGroupService } from "./chemicalGroup.service";
import { ChemicalGroupControllerBase } from "./base/chemicalGroup.controller.base";

@swagger.ApiTags("chemicalGroups")
@common.Controller("chemicalGroups")
export class ChemicalGroupController extends ChemicalGroupControllerBase {
  constructor(protected readonly service: ChemicalGroupService) {
    super(service);
  }
}
