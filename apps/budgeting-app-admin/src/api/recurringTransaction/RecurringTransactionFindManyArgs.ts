import { RecurringTransactionWhereInput } from "./RecurringTransactionWhereInput";
import { RecurringTransactionOrderByInput } from "./RecurringTransactionOrderByInput";

export type RecurringTransactionFindManyArgs = {
  where?: RecurringTransactionWhereInput;
  orderBy?: Array<RecurringTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
