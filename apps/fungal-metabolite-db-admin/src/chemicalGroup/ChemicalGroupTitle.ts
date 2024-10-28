import { ChemicalGroup as TChemicalGroup } from "../api/chemicalGroup/ChemicalGroup";

export const CHEMICALGROUP_TITLE_FIELD = "name";

export const ChemicalGroupTitle = (record: TChemicalGroup): string => {
  return record.name?.toString() || String(record.id);
};
