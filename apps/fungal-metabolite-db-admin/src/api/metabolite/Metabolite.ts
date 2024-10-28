import { ChemicalGroup } from "../chemicalGroup/ChemicalGroup";

export type Metabolite = {
  chemicalGroup?: ChemicalGroup | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
