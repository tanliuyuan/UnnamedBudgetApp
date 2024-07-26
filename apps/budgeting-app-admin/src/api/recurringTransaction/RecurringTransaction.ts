import { Category } from "../category/Category";
import { User } from "../user/User";

export type RecurringTransaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date | null;
  amount: number | null;
  endDate: Date | null;
  description: string | null;
  intervalType: string | null;
  category?: Category | null;
  user?: User | null;
};
