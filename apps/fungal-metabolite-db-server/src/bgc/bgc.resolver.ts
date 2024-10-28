import * as graphql from "@nestjs/graphql";
import { BgcResolverBase } from "./base/bgc.resolver.base";
import { Bgc } from "./base/Bgc";
import { BgcService } from "./bgc.service";

@graphql.Resolver(() => Bgc)
export class BgcResolver extends BgcResolverBase {
  constructor(protected readonly service: BgcService) {
    super(service);
  }
}
