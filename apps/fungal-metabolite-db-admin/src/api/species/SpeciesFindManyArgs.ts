import { SpeciesWhereInput } from "./SpeciesWhereInput";
import { SpeciesOrderByInput } from "./SpeciesOrderByInput";

export type SpeciesFindManyArgs = {
  where?: SpeciesWhereInput;
  orderBy?: Array<SpeciesOrderByInput>;
  skip?: number;
  take?: number;
};
