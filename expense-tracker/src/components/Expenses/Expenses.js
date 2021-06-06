import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem.js';
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesChart from './ExpensesChart.js';
import ExpensesList from './ExpensesList.js';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    })



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>

    );
}

export default Expenses;