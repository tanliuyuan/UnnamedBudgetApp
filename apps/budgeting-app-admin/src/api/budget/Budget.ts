import { User } from "../user/User";
import { Expense } from "../expense/Expense";

export type Budget = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalAmount: number | null;
  startDate: Date | null;
  endDate: Date | null;
  title: string | null;
  user?: User | null;
  expenses?: Array<Expense>;
};
