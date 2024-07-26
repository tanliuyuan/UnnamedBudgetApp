import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecurringTransactionServiceBase } from "./base/recurringTransaction.service.base";

@Injectable()
export class RecurringTransactionService extends RecurringTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
