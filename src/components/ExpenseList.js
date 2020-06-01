import React from 'react';
import {connect} from 'react-redux'; //Connects the component to the redux store.
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
           return <ExpenseListItem 
                key={expense.id} {...expense}        //Use spread operator to get all the properties from the expense object.
                // description={expense.description}
                // amount={expense.amount}      
                // createdAt={expense.createdAt}
            />
        })}
    </div>
);

const mapStateToProps =  (state) => {  
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList) //connect returns me a connected higher order component which allows my component to use the store's state.