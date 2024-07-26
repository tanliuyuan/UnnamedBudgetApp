import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BudgetListRelationFilter } from "../budget/BudgetListRelationFilter";
import { RecurringTransactionListRelationFilter } from "../recurringTransaction/RecurringTransactionListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  budgets?: BudgetListRelationFilter;
  recurringTransactions?: RecurringTransactionListRelationFilter;
};
