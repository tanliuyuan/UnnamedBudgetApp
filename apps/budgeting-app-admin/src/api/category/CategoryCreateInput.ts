import { RecurringTransactionCreateNestedManyWithoutCategoriesInput } from "./RecurringTransactionCreateNestedManyWithoutCategoriesInput";
import { ExpenseCreateNestedManyWithoutCategoriesInput } from "./ExpenseCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  recurringTransactions?: RecurringTransactionCreateNestedManyWithoutCategoriesInput;
  expenses?: ExpenseCreateNestedManyWithoutCategoriesInput;
};
