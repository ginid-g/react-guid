import { useState } from "react";
import Card from "../UI/Card";

import ExpenseForm from "../newExpense/ExpenseForm";
import Expense from "./Expense";

const initial_expneses = [
  {
    id: 1,
    title: "Some title",
    amount: 25.65,
    date: new Date(),
  },
  {
    id: 2,
    title: "Some title2",
    amount: 25.65,
    date: new Date(),
  },
  {
    id: 3,
    title: "Some title3",
    amount: 25.65,
    date: new Date(),
  },
  {
    id: 4,
    title: "Some title4",
    amount: 25.65,
    date: new Date(),
  },
];

function ExpensProject() {
  const [expenses, setExpenses] = useState(initial_expneses);

  const addExpense = (expenseData) => {
    setExpenses((prev) => [...prev, expenseData]);
  };

  return (
    <>
      <Card>
        <ExpenseForm onSave={addExpense}></ExpenseForm>
      </Card>
      <Card>
        <Expense expenses={expenses} />
      </Card>
    </>
  );
}

export default ExpensProject;
