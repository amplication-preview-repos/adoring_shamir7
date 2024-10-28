import { MetaboliteCreateNestedManyWithoutChemicalGroupsInput } from "./MetaboliteCreateNestedManyWithoutChemicalGroupsInput";

export type ChemicalGroupCreateInput = {
  metabolites?: MetaboliteCreateNestedManyWithoutChemicalGroupsInput;
  name?: string | null;
};
