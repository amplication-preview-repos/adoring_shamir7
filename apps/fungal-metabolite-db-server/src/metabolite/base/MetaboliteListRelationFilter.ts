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
import { MetaboliteWhereInput } from "./MetaboliteWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MetaboliteListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MetaboliteWhereInput,
  })
  @ValidateNested()
  @Type(() => MetaboliteWhereInput)
  @IsOptional()
  @Field(() => MetaboliteWhereInput, {
    nullable: true,
  })
  every?: MetaboliteWhereInput;

  @ApiProperty({
    required: false,
    type: () => MetaboliteWhereInput,
  })
  @ValidateNested()
  @Type(() => MetaboliteWhereInput)
  @IsOptional()
  @Field(() => MetaboliteWhereInput, {
    nullable: true,
  })
  some?: MetaboliteWhereInput;

  @ApiProperty({
    required: false,
    type: () => MetaboliteWhereInput,
  })
  @ValidateNested()
  @Type(() => MetaboliteWhereInput)
  @IsOptional()
  @Field(() => MetaboliteWhereInput, {
    nullable: true,
  })
  none?: MetaboliteWhereInput;
}
export { MetaboliteListRelationFilter as MetaboliteListRelationFilter };
