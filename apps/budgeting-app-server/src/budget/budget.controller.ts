import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BudgetService } from "./budget.service";
import { BudgetControllerBase } from "./base/budget.controller.base";

@swagger.ApiTags("budgets")
@common.Controller("budgets")
export class BudgetController extends BudgetControllerBase {
  constructor(protected readonly service: BudgetService) {
    super(service);
  }
}
