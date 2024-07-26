import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecurringTransactionListRelationFilter } from "../recurringTransaction/RecurringTransactionListRelationFilter";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  recurringTransactions?: RecurringTransactionListRelationFilter;
  expenses?: ExpenseListRelationFilter;
};
