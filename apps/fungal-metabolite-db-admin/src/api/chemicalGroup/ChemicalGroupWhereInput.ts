import { StringFilter } from "../../util/StringFilter";
import { MetaboliteListRelationFilter } from "../metabolite/MetaboliteListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChemicalGroupWhereInput = {
  id?: StringFilter;
  metabolites?: MetaboliteListRelationFilter;
  name?: StringNullableFilter;
};
