import * as graphql from "@nestjs/graphql";
import { MetaboliteResolverBase } from "./base/metabolite.resolver.base";
import { Metabolite } from "./base/Metabolite";
import { MetaboliteService } from "./metabolite.service";

@graphql.Resolver(() => Metabolite)
export class MetaboliteResolver extends MetaboliteResolverBase {
  constructor(protected readonly service: MetaboliteService) {
    super(service);
  }
}
