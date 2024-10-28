import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpeciesService } from "./species.service";
import { SpeciesControllerBase } from "./base/species.controller.base";

@swagger.ApiTags("species")
@common.Controller("species")
export class SpeciesController extends SpeciesControllerBase {
  constructor(protected readonly service: SpeciesService) {
    super(service);
  }
}
