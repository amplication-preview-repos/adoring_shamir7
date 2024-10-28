import * as graphql from "@nestjs/graphql";
import { SpeciesResolverBase } from "./base/species.resolver.base";
import { Species } from "./base/Species";
import { SpeciesService } from "./species.service";

@graphql.Resolver(() => Species)
export class SpeciesResolver extends SpeciesResolverBase {
  constructor(protected readonly service: SpeciesService) {
    super(service);
  }
}
