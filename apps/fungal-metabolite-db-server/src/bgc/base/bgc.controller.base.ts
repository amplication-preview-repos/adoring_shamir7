/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BgcService } from "../bgc.service";
import { BgcCreateInput } from "./BgcCreateInput";
import { Bgc } from "./Bgc";
import { BgcFindManyArgs } from "./BgcFindManyArgs";
import { BgcWhereUniqueInput } from "./BgcWhereUniqueInput";
import { BgcUpdateInput } from "./BgcUpdateInput";

export class BgcControllerBase {
  constructor(protected readonly service: BgcService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bgc })
  async createBgc(@common.Body() data: BgcCreateInput): Promise<Bgc> {
    return await this.service.createBgc({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Bgc] })
  @ApiNestedQuery(BgcFindManyArgs)
  async bgcs(@common.Req() request: Request): Promise<Bgc[]> {
    const args = plainToClass(BgcFindManyArgs, request.query);
    return this.service.bgcs({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bgc })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bgc(@common.Param() params: BgcWhereUniqueInput): Promise<Bgc | null> {
    const result = await this.service.bgc({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bgc })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBgc(
    @common.Param() params: BgcWhereUniqueInput,
    @common.Body() data: BgcUpdateInput
  ): Promise<Bgc | null> {
    try {
      return await this.service.updateBgc({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bgc })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBgc(
    @common.Param() params: BgcWhereUniqueInput
  ): Promise<Bgc | null> {
    try {
      return await this.service.deleteBgc({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
