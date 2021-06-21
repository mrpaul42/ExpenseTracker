import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [buttonClick, setButtonClick] = useState(false);
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setButtonClick(false);
  };
  const changeHandler = () => {
    setButtonClick(true);
  };
  const cancelHandler = () => {
    setButtonClick(false);
  };

  return (
    <div className="new-expense">
      {!buttonClick && <button onClick={changeHandler}>Add New Expense</button>}
      {buttonClick && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
