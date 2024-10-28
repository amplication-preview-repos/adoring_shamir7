import { Metabolite } from "../metabolite/Metabolite";

export type ChemicalGroup = {
  createdAt: Date;
  id: string;
  metabolites?: Array<Metabolite>;
  name: string | null;
  updatedAt: Date;
};
