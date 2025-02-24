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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { RecurringTransactionCreateNestedManyWithoutCategoriesInput } from "./RecurringTransactionCreateNestedManyWithoutCategoriesInput";
import { Type } from "class-transformer";
import { ExpenseCreateNestedManyWithoutCategoriesInput } from "./ExpenseCreateNestedManyWithoutCategoriesInput";

@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => RecurringTransactionCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => RecurringTransactionCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => RecurringTransactionCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  recurringTransactions?: RecurringTransactionCreateNestedManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: () => ExpenseCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => ExpenseCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => ExpenseCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  expenses?: ExpenseCreateNestedManyWithoutCategoriesInput;
}

export { CategoryCreateInput as CategoryCreateInput };
