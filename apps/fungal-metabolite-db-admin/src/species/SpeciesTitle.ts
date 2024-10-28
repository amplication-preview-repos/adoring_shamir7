import { Species as TSpecies } from "../api/species/Species";

export const SPECIES_TITLE_FIELD = "name";

export const SpeciesTitle = (record: TSpecies): string => {
  return record.name?.toString() || String(record.id);
};
