import { Controller, Param, Get, Post, Put, Body, Delete, UseGuards } from '@nestjs/common';
import { ExpenseService, Expense } from './expense.service'; 
import { ExpenseGuard } from './expense.guard';



@Controller('expense')
export class ExpenseController {
   constructor(private readonly expenseService: ExpenseService) {}
   
   
   @Get()
   getAllExpenses() {
      return this.expenseService.getAllExpenses();
   }

   @Get(':id')
   getExpenseById(@Param('id') id: number) {
      return this.expenseService.getExpenseById(id);
   }
   
   @UseGuards(ExpenseGuard)
   @Post()
   postExpense(@Body() expenseData: Expense) {
      this.expenseService.createExpense(expenseData);
      return `created expense ${JSON.stringify(expenseData)}`;
   }

   @UseGuards(ExpenseGuard)
   @Put(':id') 
   putExpense(@Param('id') id: number, @Body() expenseData: Expense) {
      this.expenseService.updateExpense(id, expenseData);
      return `updated expense with id ${id}`;
   }

   @UseGuards(ExpenseGuard)
   @Delete(':id')
   deleteExpense(@Param('id') id: number) {
      this.expenseService.deleteExpense(id);
      return `deleted expense with id ${id}`;
   }
}
