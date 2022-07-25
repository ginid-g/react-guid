import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleTitle = (event) => setTitle(event.target.value);
  const handleDate = (event) => setDate(event.target.value);
  const handleAmount = (event) => setAmount(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSave({
      title: title,
      date: date,
      amount: amount,
    });

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="title">Title</label>
          <input type="text" id="title" value={title} onChange={handleTitle} />
        </div>

        <div>
          <label for="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmount}
          />
        </div>

        <div>
          <label for="date">date</label>
          <input type="date" id="date" value={date} onChange={handleDate} />
        </div>

        <div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
