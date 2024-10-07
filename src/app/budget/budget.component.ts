import { Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {

  budgets = [
    { name: 'Monthly Groceries', income: 500, startDate: '2023-01-01', endDate: '2023-12-31' },
    { name: 'Utilities', income: 200, startDate: '2023-01-01', endDate: '2023-12-31' },
    // Add more budget entries as needed
  ];

  selectAll: boolean = false;

  toggleSelectAll() {
    this.selectAll = !this.selectAll;
    const checkboxes = document.querySelectorAll('.budget-checkbox') as NodeListOf<HTMLInputElement>;
    checkboxes.forEach(checkbox => {
      checkbox.checked = this.selectAll;
    });
  }

  editBudget(index: number) {
    // Logic to edit the budget
    console.log('Edit budget:', this.budgets[index]);
  }

  deleteBudget(index: number) {
    // Logic to delete the budget
    console.log('Delete budget:', this.budgets[index]);
    this.budgets.splice(index, 1);
  }

  addNewBudget() {
    const name = prompt('Enter Budget Name:');
    const income = prompt('Enter Monthly Income:');
    const startDate = prompt('Enter Start Date (YYYY-MM-DD):');
    const endDate = prompt('Enter End Date (YYYY-MM-DD):');

    if (name && income && startDate && endDate) {
      this.budgets.push({
        name: name,
        income: parseFloat(income),
        startDate: startDate,
        endDate: endDate
      });
    } else {
      alert('Please fill in all fields');
    }
  }
}


