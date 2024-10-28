import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MetaboliteServiceBase } from "./base/metabolite.service.base";

@Injectable()
export class MetaboliteService extends MetaboliteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
