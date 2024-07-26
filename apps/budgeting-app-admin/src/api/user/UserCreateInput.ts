import { InputJsonValue } from "../../types";
import { BudgetCreateNestedManyWithoutUsersInput } from "./BudgetCreateNestedManyWithoutUsersInput";
import { RecurringTransactionCreateNestedManyWithoutUsersInput } from "./RecurringTransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  budgets?: BudgetCreateNestedManyWithoutUsersInput;
  recurringTransactions?: RecurringTransactionCreateNestedManyWithoutUsersInput;
};
