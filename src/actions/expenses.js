import {v4 as uuidv4} from 'uuid';

//Action Generator for addExpnse. 
export const addExpense = (
    {
        description = '', // The input arguments from the user.
        note = '',
        amount = 0, 
        createdAt = 0
    } = {}) => ({   //Implicitly returns an object.
    type:'ADD_EXPENSE',
    expense:{
        id: uuidv4(),
        description,
        name,
        amount,
        createdAt
    }
})

// Action generator for remove_expense
export const removeExpense = ({id} = {}) => ({
 type:'REMOVE_EXPENSE',
 id
})
//Axtion generator for edit_expense
export const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
})
