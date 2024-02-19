import { Injectable } from '@nestjs/common';

export interface Expense {
    id: number,
    cost: number
}

@Injectable()
export class ExpenseService {
    private expenses: Expense[] = []; 

    getAllExpenses(): Expense[] {
        return this.expenses;
    }

    getExpenseById(id: number): Expense {
        return this.expenses.find(expense => expense.id === id);
    }

    createExpense(expenseData: Expense): void {
        this.expenses.push(expenseData);
    }

    updateExpense(id: number, updatedExpense: Expense): Expense {
        const expenseIndex = this.expenses.findIndex(expense => expense.id === id);
        if (expenseIndex === -1) {
            throw new Error('not found');
        }
        this.expenses[expenseIndex] = {
            ...this.expenses[expenseIndex], 
            ...updatedExpense 
        };
    
        return this.expenses[expenseIndex];
    }
    

    deleteExpense(id: number): void {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
    }
}
