import { ChemicalGroupWhereUniqueInput } from "../chemicalGroup/ChemicalGroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MetaboliteWhereInput = {
  chemicalGroup?: ChemicalGroupWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
