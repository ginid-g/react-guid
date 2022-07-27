import ExpensList from "./ExpensList";

function Expense(prop) {
  return (
    <>
      {prop.expenses.map((expens) => {
        return (
          <ExpensList
            title={expens.title}
            date={expens.date}
            amount={expens.amount}
            key={expens.id}
          />
        );
      })}
    </>
  );
}

export default Expense;
