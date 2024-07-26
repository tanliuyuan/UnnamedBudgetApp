import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";

export type ExpenseWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  budget?: BudgetWhereUniqueInput;
};
