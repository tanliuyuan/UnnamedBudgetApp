import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ExpenseCreateNestedManyWithoutBudgetsInput } from "./ExpenseCreateNestedManyWithoutBudgetsInput";

export type BudgetCreateInput = {
  totalAmount?: number | null;
  startDate?: Date | null;
  endDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  expenses?: ExpenseCreateNestedManyWithoutBudgetsInput;
};
