import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChemicalGroupServiceBase } from "./base/chemicalGroup.service.base";

@Injectable()
export class ChemicalGroupService extends ChemicalGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
