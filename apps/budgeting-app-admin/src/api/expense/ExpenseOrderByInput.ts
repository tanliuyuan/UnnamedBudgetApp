import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  categoryId?: SortOrder;
  budgetId?: SortOrder;
};
