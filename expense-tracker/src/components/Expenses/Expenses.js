import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem.js';
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map(item => (
                    <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}></ExpenseItem>
                ))}
            </Card>
        </div>

    );
}

export default Expenses;