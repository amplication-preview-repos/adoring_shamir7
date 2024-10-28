import { BgcWhereInput } from "./BgcWhereInput";
import { BgcOrderByInput } from "./BgcOrderByInput";

export type BgcFindManyArgs = {
  where?: BgcWhereInput;
  orderBy?: Array<BgcOrderByInput>;
  skip?: number;
  take?: number;
};
