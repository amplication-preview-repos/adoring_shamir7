import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpeciesServiceBase } from "./base/species.service.base";

@Injectable()
export class SpeciesService extends SpeciesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
