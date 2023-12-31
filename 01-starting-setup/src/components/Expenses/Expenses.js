import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setFilteredYear] = useState("all");
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    setFilteredExpenses(
      props.items.filter((expense) => {
        return (
          selectedYear === "all" ||
          expense.date.getFullYear().toString() === selectedYear
        );
      })
    );
  };

  useEffect(() => {
    setFilteredExpenses(
      props.items.filter((expense) => {
        return (
          selectedYear === "all" ||
          expense.date.getFullYear().toString() === selectedYear
        );
      })
    );
  }, [props.items, selectedYear]);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
