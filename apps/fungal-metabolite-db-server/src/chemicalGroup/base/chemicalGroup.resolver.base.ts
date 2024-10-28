/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ChemicalGroup } from "./ChemicalGroup";
import { ChemicalGroupCountArgs } from "./ChemicalGroupCountArgs";
import { ChemicalGroupFindManyArgs } from "./ChemicalGroupFindManyArgs";
import { ChemicalGroupFindUniqueArgs } from "./ChemicalGroupFindUniqueArgs";
import { CreateChemicalGroupArgs } from "./CreateChemicalGroupArgs";
import { UpdateChemicalGroupArgs } from "./UpdateChemicalGroupArgs";
import { DeleteChemicalGroupArgs } from "./DeleteChemicalGroupArgs";
import { MetaboliteFindManyArgs } from "../../metabolite/base/MetaboliteFindManyArgs";
import { Metabolite } from "../../metabolite/base/Metabolite";
import { ChemicalGroupService } from "../chemicalGroup.service";
@graphql.Resolver(() => ChemicalGroup)
export class ChemicalGroupResolverBase {
  constructor(protected readonly service: ChemicalGroupService) {}

  async _chemicalGroupsMeta(
    @graphql.Args() args: ChemicalGroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ChemicalGroup])
  async chemicalGroups(
    @graphql.Args() args: ChemicalGroupFindManyArgs
  ): Promise<ChemicalGroup[]> {
    return this.service.chemicalGroups(args);
  }

  @graphql.Query(() => ChemicalGroup, { nullable: true })
  async chemicalGroup(
    @graphql.Args() args: ChemicalGroupFindUniqueArgs
  ): Promise<ChemicalGroup | null> {
    const result = await this.service.chemicalGroup(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ChemicalGroup)
  async createChemicalGroup(
    @graphql.Args() args: CreateChemicalGroupArgs
  ): Promise<ChemicalGroup> {
    return await this.service.createChemicalGroup({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ChemicalGroup)
  async updateChemicalGroup(
    @graphql.Args() args: UpdateChemicalGroupArgs
  ): Promise<ChemicalGroup | null> {
    try {
      return await this.service.updateChemicalGroup({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ChemicalGroup)
  async deleteChemicalGroup(
    @graphql.Args() args: DeleteChemicalGroupArgs
  ): Promise<ChemicalGroup | null> {
    try {
      return await this.service.deleteChemicalGroup(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Metabolite], { name: "metabolites" })
  async findMetabolites(
    @graphql.Parent() parent: ChemicalGroup,
    @graphql.Args() args: MetaboliteFindManyArgs
  ): Promise<Metabolite[]> {
    const results = await this.service.findMetabolites(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
