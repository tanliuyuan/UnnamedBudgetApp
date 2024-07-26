import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecurringTransactionWhereInput = {
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  amount?: FloatNullableFilter;
  endDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  intervalType?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
