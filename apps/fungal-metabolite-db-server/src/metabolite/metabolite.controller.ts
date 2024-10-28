import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MetaboliteService } from "./metabolite.service";
import { MetaboliteControllerBase } from "./base/metabolite.controller.base";

@swagger.ApiTags("metabolites")
@common.Controller("metabolites")
export class MetaboliteController extends MetaboliteControllerBase {
  constructor(protected readonly service: MetaboliteService) {
    super(service);
  }
}
