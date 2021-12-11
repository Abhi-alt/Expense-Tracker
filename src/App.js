import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [expense, setExpense] = useState([]);

  const newExpense = (newAddedExpense) => {
    setExpense((prevExpense) => {
      return [newAddedExpense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense newExpense={newExpense} />
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
