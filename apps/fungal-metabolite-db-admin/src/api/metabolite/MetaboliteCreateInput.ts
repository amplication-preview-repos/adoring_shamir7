import { ChemicalGroupWhereUniqueInput } from "../chemicalGroup/ChemicalGroupWhereUniqueInput";

export type MetaboliteCreateInput = {
  chemicalGroup?: ChemicalGroupWhereUniqueInput | null;
  name?: string | null;
};
