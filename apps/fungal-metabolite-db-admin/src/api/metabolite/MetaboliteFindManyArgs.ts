import { MetaboliteWhereInput } from "./MetaboliteWhereInput";
import { MetaboliteOrderByInput } from "./MetaboliteOrderByInput";

export type MetaboliteFindManyArgs = {
  where?: MetaboliteWhereInput;
  orderBy?: Array<MetaboliteOrderByInput>;
  skip?: number;
  take?: number;
};
