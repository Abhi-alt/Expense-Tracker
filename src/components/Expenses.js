import { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./NewExpense/ExpensesList";
import Chart from "./Chart/Chart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");

  const onFilterChange = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  let filteredExpense = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter filterYear={filterYear} onFilterChange={onFilterChange} />
      <Chart data={filteredExpense} />
      <ExpensesList filteredExpense={filteredExpense} />
    </Card>
  );
}

export default Expenses;
