import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { BudgetWhereUniqueInput } from "../budget/BudgetWhereUniqueInput";

export type ExpenseCreateInput = {
  amount?: number | null;
  date?: Date | null;
  description?: string | null;
  category?: CategoryWhereUniqueInput | null;
  budget?: BudgetWhereUniqueInput | null;
};
