import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ExpenseUpdateManyWithoutBudgetsInput } from "./ExpenseUpdateManyWithoutBudgetsInput";

export type BudgetUpdateInput = {
  totalAmount?: number | null;
  startDate?: Date | null;
  endDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  expenses?: ExpenseUpdateManyWithoutBudgetsInput;
};
