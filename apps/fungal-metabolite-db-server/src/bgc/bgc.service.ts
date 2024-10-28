import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BgcServiceBase } from "./base/bgc.service.base";

@Injectable()
export class BgcService extends BgcServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
