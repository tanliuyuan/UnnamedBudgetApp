/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CategoryService } from "../category.service";
import { CategoryCreateInput } from "./CategoryCreateInput";
import { Category } from "./Category";
import { CategoryFindManyArgs } from "./CategoryFindManyArgs";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryUpdateInput } from "./CategoryUpdateInput";
import { RecurringTransactionFindManyArgs } from "../../recurringTransaction/base/RecurringTransactionFindManyArgs";
import { RecurringTransaction } from "../../recurringTransaction/base/RecurringTransaction";
import { RecurringTransactionWhereUniqueInput } from "../../recurringTransaction/base/RecurringTransactionWhereUniqueInput";
import { ExpenseFindManyArgs } from "../../expense/base/ExpenseFindManyArgs";
import { Expense } from "../../expense/base/Expense";
import { ExpenseWhereUniqueInput } from "../../expense/base/ExpenseWhereUniqueInput";

export class CategoryControllerBase {
  constructor(protected readonly service: CategoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Category })
  async createCategory(
    @common.Body() data: CategoryCreateInput
  ): Promise<Category> {
    return await this.service.createCategory({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Category] })
  @ApiNestedQuery(CategoryFindManyArgs)
  async categories(@common.Req() request: Request): Promise<Category[]> {
    const args = plainToClass(CategoryFindManyArgs, request.query);
    return this.service.categories({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async category(
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Category | null> {
    const result = await this.service.category({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCategory(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() data: CategoryUpdateInput
  ): Promise<Category | null> {
    try {
      return await this.service.updateCategory({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCategory(
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Category | null> {
    try {
      return await this.service.deleteCategory({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/recurringTransactions")
  @ApiNestedQuery(RecurringTransactionFindManyArgs)
  async findRecurringTransactions(
    @common.Req() request: Request,
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<RecurringTransaction[]> {
    const query = plainToClass(RecurringTransactionFindManyArgs, request.query);
    const results = await this.service.findRecurringTransactions(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        startDate: true,
        amount: true,
        endDate: true,
        description: true,
        intervalType: true,

        category: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/recurringTransactions")
  async connectRecurringTransactions(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: RecurringTransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recurringTransactions: {
        connect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/recurringTransactions")
  async updateRecurringTransactions(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: RecurringTransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recurringTransactions: {
        set: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/recurringTransactions")
  async disconnectRecurringTransactions(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: RecurringTransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      recurringTransactions: {
        disconnect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/expenses")
  @ApiNestedQuery(ExpenseFindManyArgs)
  async findExpenses(
    @common.Req() request: Request,
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Expense[]> {
    const query = plainToClass(ExpenseFindManyArgs, request.query);
    const results = await this.service.findExpenses(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        date: true,
        description: true,

        category: {
          select: {
            id: true,
          },
        },

        budget: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/expenses")
  async connectExpenses(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: ExpenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenses: {
        connect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/expenses")
  async updateExpenses(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: ExpenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenses: {
        set: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/expenses")
  async disconnectExpenses(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: ExpenseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenses: {
        disconnect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }
}
