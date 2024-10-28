import * as graphql from "@nestjs/graphql";
import { ChemicalGroupResolverBase } from "./base/chemicalGroup.resolver.base";
import { ChemicalGroup } from "./base/ChemicalGroup";
import { ChemicalGroupService } from "./chemicalGroup.service";

@graphql.Resolver(() => ChemicalGroup)
export class ChemicalGroupResolver extends ChemicalGroupResolverBase {
  constructor(protected readonly service: ChemicalGroupService) {
    super(service);
  }
}
