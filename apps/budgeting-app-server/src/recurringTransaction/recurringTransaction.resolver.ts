import * as graphql from "@nestjs/graphql";
import { RecurringTransactionResolverBase } from "./base/recurringTransaction.resolver.base";
import { RecurringTransaction } from "./base/RecurringTransaction";
import { RecurringTransactionService } from "./recurringTransaction.service";

@graphql.Resolver(() => RecurringTransaction)
export class RecurringTransactionResolver extends RecurringTransactionResolverBase {
  constructor(protected readonly service: RecurringTransactionService) {
    super(service);
  }
}
