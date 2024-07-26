import { Module } from "@nestjs/common";
import { BudgetModuleBase } from "./base/budget.module.base";
import { BudgetService } from "./budget.service";
import { BudgetController } from "./budget.controller";
import { BudgetResolver } from "./budget.resolver";

@Module({
  imports: [BudgetModuleBase],
  controllers: [BudgetController],
  providers: [BudgetService, BudgetResolver],
  exports: [BudgetService],
})
export class BudgetModule {}
