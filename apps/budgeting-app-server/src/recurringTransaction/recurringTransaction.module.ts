import { Module } from "@nestjs/common";
import { RecurringTransactionModuleBase } from "./base/recurringTransaction.module.base";
import { RecurringTransactionService } from "./recurringTransaction.service";
import { RecurringTransactionController } from "./recurringTransaction.controller";
import { RecurringTransactionResolver } from "./recurringTransaction.resolver";

@Module({
  imports: [RecurringTransactionModuleBase],
  controllers: [RecurringTransactionController],
  providers: [RecurringTransactionService, RecurringTransactionResolver],
  exports: [RecurringTransactionService],
})
export class RecurringTransactionModule {}
