import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const newExpenseData = (expenseData) => {
    const addedExpense = expenseData;
    props.newExpense(addedExpense);
    setIsEditing(false);
  };
  const onNewExpense = () => {
    setIsEditing(true);
  };
  const onCancel = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={onNewExpense}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm newExpenseData={newExpenseData} onCancel={onCancel} />
      )}
    </div>
  );
};
export default NewExpense;
