import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecurringTransactionCreateInput = {
  startDate?: Date | null;
  amount?: number | null;
  endDate?: Date | null;
  description?: string | null;
  intervalType?: string | null;
  category?: CategoryWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
