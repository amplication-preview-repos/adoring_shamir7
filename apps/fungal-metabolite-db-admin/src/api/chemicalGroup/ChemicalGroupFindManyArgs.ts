import { ChemicalGroupWhereInput } from "./ChemicalGroupWhereInput";
import { ChemicalGroupOrderByInput } from "./ChemicalGroupOrderByInput";

export type ChemicalGroupFindManyArgs = {
  where?: ChemicalGroupWhereInput;
  orderBy?: Array<ChemicalGroupOrderByInput>;
  skip?: number;
  take?: number;
};
