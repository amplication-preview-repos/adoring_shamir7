import { Metabolite as TMetabolite } from "../api/metabolite/Metabolite";

export const METABOLITE_TITLE_FIELD = "name";

export const MetaboliteTitle = (record: TMetabolite): string => {
  return record.name?.toString() || String(record.id);
};
