import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecurringTransactionService } from "./recurringTransaction.service";
import { RecurringTransactionControllerBase } from "./base/recurringTransaction.controller.base";

@swagger.ApiTags("recurringTransactions")
@common.Controller("recurringTransactions")
export class RecurringTransactionController extends RecurringTransactionControllerBase {
  constructor(protected readonly service: RecurringTransactionService) {
    super(service);
  }
}
