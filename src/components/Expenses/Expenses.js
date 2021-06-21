import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterHandler = (year) => {
    setFilterYear(year);
  };

  const filterArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilter={filterHandler} />
        <ExpenseChart expenses={filterArray} />
        <ExpensesList filterArray={filterArray} />
      </Card>
    </div>
  );
};

export default Expenses;
