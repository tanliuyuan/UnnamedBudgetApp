import { RecurringTransactionUpdateManyWithoutCategoriesInput } from "./RecurringTransactionUpdateManyWithoutCategoriesInput";
import { ExpenseUpdateManyWithoutCategoriesInput } from "./ExpenseUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  recurringTransactions?: RecurringTransactionUpdateManyWithoutCategoriesInput;
  expenses?: ExpenseUpdateManyWithoutCategoriesInput;
};
