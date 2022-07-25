import Card from "../UI/Card";
import ExpensList from "./ExpensList";
import ExpenseForm from "../newExpense/ExpenseForm";

function ExpensProject() {
  const expenses = [
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

  const addExpense = (expenseData) => {
    console.log(expenseData);
  };

  return (
    <>
      <Card>
        <ExpenseForm onSave={addExpense}></ExpenseForm>
      </Card>
      <Card>
        <ExpensList
          title={expenses[0].title}
          date={expenses[0].date}
          amount={expenses[0].amount}
        />
        <ExpensList
          title={expenses[1].title}
          date={expenses[1].date}
          amount={expenses[1].amount}
        />
        <ExpensList
          title={expenses[2].title}
          date={expenses[2].date}
          amount={expenses[2].amount}
        />
        <ExpensList
          title={expenses[3].title}
          date={expenses[3].date}
          amount={expenses[3].amount}
        />
      </Card>
    </>
  );
}

export default ExpensProject;
