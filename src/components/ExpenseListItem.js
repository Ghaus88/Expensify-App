import React from 'react';
import {removeExpense} from '../actions/expenses';
import {connect} from 'react-redux';


const ExpenseListItem = ({description,amount,createdAt,id,dispatch}) => ( //Destructure the props object.
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem) // Dont need anything from the store so dont have to place a function inside connect().
                                          // Gives us access to the dispatch prop.
