import { useState } from "react";
import Card from "../UI/Card";

import ExpenseForm from "../newExpense/ExpenseForm";
import Expense from "./Expense";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const initial_expneses = [];

function ExpensProject() {
  const [expenses, setExpenses] = useState(initial_expneses);

  const [filterredExpenses, setFilterredExpenses] = useState(expenses);

  const addExpense = (expenseData) => {
    setExpenses((prev) => [expenseData, ...prev]);
  };

  const handleDateChange = (expensYear) => {
    setFilterredExpenses(
      expenses.filter(
        (expens) => expens.date.getFullYear().toString() === expensYear
      )
    );
  };

  return (
    <>
      <Card>
        <ExpenseForm onSave={addExpense}></ExpenseForm>
      </Card>
      <Card>
        <ExpenseChart expens={filterredExpenses} />
      </Card>
      <Card>
        <ExpenseFilter onDateChange={handleDateChange} />
        {filterredExpenses && filterredExpenses.length ? (
          <Expense expenses={filterredExpenses} />
        ) : (
          <div>No Data Available</div>
        )}
      </Card>
    </>
  );
}

export default ExpensProject;
