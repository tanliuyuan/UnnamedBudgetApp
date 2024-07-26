import { Category } from "../category/Category";
import { Budget } from "../budget/Budget";

export type Expense = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  date: Date | null;
  description: string | null;
  category?: Category | null;
  budget?: Budget | null;
};
