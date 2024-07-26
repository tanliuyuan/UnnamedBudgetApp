import { Budget as TBudget } from "../api/budget/Budget";

export const BUDGET_TITLE_FIELD = "title";

export const BudgetTitle = (record: TBudget): string => {
  return record.title?.toString() || String(record.id);
};
