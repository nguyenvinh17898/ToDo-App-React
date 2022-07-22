import React from "react";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    
    let expensesContent = <p>No expenses found.</p>;

    return <ul className="expses-list">
        {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
        ))}
    </ul>
}

export default ExpensesList;