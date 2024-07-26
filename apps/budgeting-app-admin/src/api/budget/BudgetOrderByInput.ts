import { SortOrder } from "../../util/SortOrder";

export type BudgetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  totalAmount?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  title?: SortOrder;
  userId?: SortOrder;
};
