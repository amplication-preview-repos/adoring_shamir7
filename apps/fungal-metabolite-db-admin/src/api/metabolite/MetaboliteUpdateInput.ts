import { ChemicalGroupWhereUniqueInput } from "../chemicalGroup/ChemicalGroupWhereUniqueInput";

export type MetaboliteUpdateInput = {
  chemicalGroup?: ChemicalGroupWhereUniqueInput | null;
  name?: string | null;
};
