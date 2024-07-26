import { JsonValue } from "type-fest";
import { Budget } from "../budget/Budget";
import { RecurringTransaction } from "../recurringTransaction/RecurringTransaction";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  budgets?: Array<Budget>;
  recurringTransactions?: Array<RecurringTransaction>;
};
