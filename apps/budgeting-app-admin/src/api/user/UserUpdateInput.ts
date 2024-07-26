import { InputJsonValue } from "../../types";
import { BudgetUpdateManyWithoutUsersInput } from "./BudgetUpdateManyWithoutUsersInput";
import { RecurringTransactionUpdateManyWithoutUsersInput } from "./RecurringTransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  budgets?: BudgetUpdateManyWithoutUsersInput;
  recurringTransactions?: RecurringTransactionUpdateManyWithoutUsersInput;
};
