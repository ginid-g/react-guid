import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseList.css";

function ExpensList(props) {
  return (
    <Card>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </Card>
  );
}

export default ExpensList;
