import { SpeciesWhereUniqueInput } from "./SpeciesWhereUniqueInput";
import { SpeciesUpdateInput } from "./SpeciesUpdateInput";

export type UpdateSpeciesArgs = {
  where: SpeciesWhereUniqueInput;
  data: SpeciesUpdateInput;
};
