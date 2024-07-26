import { SortOrder } from "../../util/SortOrder";

export type RecurringTransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startDate?: SortOrder;
  amount?: SortOrder;
  endDate?: SortOrder;
  description?: SortOrder;
  intervalType?: SortOrder;
  categoryId?: SortOrder;
  userId?: SortOrder;
};
