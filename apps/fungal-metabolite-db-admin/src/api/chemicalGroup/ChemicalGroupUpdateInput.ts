import { MetaboliteUpdateManyWithoutChemicalGroupsInput } from "./MetaboliteUpdateManyWithoutChemicalGroupsInput";

export type ChemicalGroupUpdateInput = {
  metabolites?: MetaboliteUpdateManyWithoutChemicalGroupsInput;
  name?: string | null;
};
