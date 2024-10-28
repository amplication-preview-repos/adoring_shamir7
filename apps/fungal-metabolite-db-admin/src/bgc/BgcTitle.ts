import { Bgc as TBgc } from "../api/bgc/Bgc";

export const BGC_TITLE_FIELD = "name";

export const BgcTitle = (record: TBgc): string => {
  return record.name?.toString() || String(record.id);
};
