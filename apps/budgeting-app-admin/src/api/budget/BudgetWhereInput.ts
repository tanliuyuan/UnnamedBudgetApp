import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";

export type BudgetWhereInput = {
  id?: StringFilter;
  totalAmount?: FloatNullableFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  expenses?: ExpenseListRelationFilter;
};
