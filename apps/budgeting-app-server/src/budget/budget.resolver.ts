import * as graphql from "@nestjs/graphql";
import { BudgetResolverBase } from "./base/budget.resolver.base";
import { Budget } from "./base/Budget";
import { BudgetService } from "./budget.service";

@graphql.Resolver(() => Budget)
export class BudgetResolver extends BudgetResolverBase {
  constructor(protected readonly service: BudgetService) {
    super(service);
  }
}
