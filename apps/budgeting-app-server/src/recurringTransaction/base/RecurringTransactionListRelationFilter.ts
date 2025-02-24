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
import { RecurringTransactionWhereInput } from "./RecurringTransactionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RecurringTransactionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RecurringTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => RecurringTransactionWhereInput)
  @IsOptional()
  @Field(() => RecurringTransactionWhereInput, {
    nullable: true,
  })
  every?: RecurringTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecurringTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => RecurringTransactionWhereInput)
  @IsOptional()
  @Field(() => RecurringTransactionWhereInput, {
    nullable: true,
  })
  some?: RecurringTransactionWhereInput;

  @ApiProperty({
    required: false,
    type: () => RecurringTransactionWhereInput,
  })
  @ValidateNested()
  @Type(() => RecurringTransactionWhereInput)
  @IsOptional()
  @Field(() => RecurringTransactionWhereInput, {
    nullable: true,
  })
  none?: RecurringTransactionWhereInput;
}
export { RecurringTransactionListRelationFilter as RecurringTransactionListRelationFilter };
