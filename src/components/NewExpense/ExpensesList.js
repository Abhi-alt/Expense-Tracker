import ExpenseItem from "../ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const renderedList =
    props.filteredExpense.length === 0 ? (
      <div className="expenses-list__no_expense">No expenses found.</div>
    ) : (
      props.filteredExpense.map((entry) => {
        // if (entry.date.getFullYear().toString() === filterYear) {
        return (
          <ExpenseItem
            key={entry.title + Math.random() * 1000}
            date={entry.date}
            title={entry.title}
            amount={entry.amount}
          />
        );
        // }
      })
    );
  return <>{renderedList}</>;
};

export default ExpensesList;
