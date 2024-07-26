import { RecurringTransaction } from "../recurringTransaction/RecurringTransaction";
import { Expense } from "../expense/Expense";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  recurringTransactions?: Array<RecurringTransaction>;
  expenses?: Array<Expense>;
};
