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
      date: new Date(date),
      amount: amount,
      id: Math.random() * 9999,
    });

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={handleTitle} />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmount}
          />
        </div>

        <div>
          <label htmlFor="date">date</label>
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
