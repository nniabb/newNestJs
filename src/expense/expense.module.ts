import { Module } from '@nestjs/common';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';


@Module({
  providers: [ExpenseService],
  exports: [ExpenseService],
  controllers: [ExpenseController]
})

export class ExpenseModule {}