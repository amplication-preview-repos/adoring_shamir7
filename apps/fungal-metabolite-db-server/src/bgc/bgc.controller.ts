import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BgcService } from "./bgc.service";
import { BgcControllerBase } from "./base/bgc.controller.base";

@swagger.ApiTags("bgcs")
@common.Controller("bgcs")
export class BgcController extends BgcControllerBase {
  constructor(protected readonly service: BgcService) {
    super(service);
  }
}
