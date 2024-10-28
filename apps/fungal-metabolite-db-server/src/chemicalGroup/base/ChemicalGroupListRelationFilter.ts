/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChemicalGroupWhereInput } from "./ChemicalGroupWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChemicalGroupListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ChemicalGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => ChemicalGroupWhereInput)
  @IsOptional()
  @Field(() => ChemicalGroupWhereInput, {
    nullable: true,
  })
  every?: ChemicalGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChemicalGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => ChemicalGroupWhereInput)
  @IsOptional()
  @Field(() => ChemicalGroupWhereInput, {
    nullable: true,
  })
  some?: ChemicalGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChemicalGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => ChemicalGroupWhereInput)
  @IsOptional()
  @Field(() => ChemicalGroupWhereInput, {
    nullable: true,
  })
  none?: ChemicalGroupWhereInput;
}
export { ChemicalGroupListRelationFilter as ChemicalGroupListRelationFilter };
