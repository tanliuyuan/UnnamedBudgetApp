import { RecurringTransaction as TRecurringTransaction } from "../api/recurringTransaction/RecurringTransaction";

export const RECURRINGTRANSACTION_TITLE_FIELD = "intervalType";

export const RecurringTransactionTitle = (
  record: TRecurringTransaction
): string => {
  return record.intervalType?.toString() || String(record.id);
};
