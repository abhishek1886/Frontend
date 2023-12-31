import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import AddNewExpense from "./components/NewExpense/AddNewExpense";

const DUMMY_ITEMS = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    location: "Mumbai",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    location: "Mumbai",
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    location: "Delhi",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    location: "Banglore",
    date: new Date(2021, 5,12)
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_ITEMS);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isAddButtonVisible, setAddButtonVisible] = useState(true);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    setAddButtonVisible(true);
    setFormVisible(false);
  };

  const addButtonHandler = () => {
    setFormVisible(true);
    setAddButtonVisible(false);
  }

  const cancelHandler = () => {
    setAddButtonVisible(true);
    setFormVisible(false);
  }

  return (
    <div>
      {isFormVisible && <NewExpense onCancel= {cancelHandler} onAddExpense={addExpenseHandler} />}
      {isAddButtonVisible && <AddNewExpense onAddButton={addButtonHandler}/>}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
