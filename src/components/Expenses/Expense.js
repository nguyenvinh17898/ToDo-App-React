import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expense.css';
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const fiteredExpense = props.items.filter((expense) => expense.date.getFullYear() == filteredYear)
    console.log(fiteredExpense);
    
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            ></ExpensesFilter>
            <ExpensesList items={fiteredExpense}/>
        </Card>
    )
}

export default Expenses;