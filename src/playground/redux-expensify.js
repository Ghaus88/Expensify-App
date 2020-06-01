import {createStore,combineReducers} from 'redux'
import {v4 as uuidv4} from 'uuid';


// Have to use the combineReducers to handle all these different action object. One reducer not possible.
//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Action Generator for addExpnse. 
const addExpense = (
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
const removeExpense = ({id} = {}) => ({
 type:'REMOVE_EXPENSE',
 id
})
//Axtion generator for edit_expense
const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
})

//Action generator for setTextFilter
const setTextFilter = (text = ' ') => ({
    type:'SET_TEXT_FILTER',
    text
})

//Action generator for sort by Amouna and Date
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT',
})
const sortByDate = () => ({
    type:'SORT_BY_DATE',
})

//Action Generators for set start date and end date.
const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type:'SET_END_DATE',
    endDate
})
//Expenses Reducer 
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
        return [...state,action.expense]  // This ..state syntax gets all the previous expenses in the array and combines with action.expnse to create a new array.
        case 'REMOVE_EXPENSE' : 
         return state.filter(({id}) => {  //Destructure id from each object stored in state.
            //console.log(id,action)
             return id !== action.id
            })
        case 'EDIT_EXPENSE': 
        return state.map((expense) => {
            console.log('Expense',expense.id, 'Action',action)
            if(expense.id === action.id) {
                return {
                    ...expense,         //Spread operator for objects. Combines 2 different objects to make a new one. //Need to download some babel plugin
                    ...action.updates
                }
            }else {
                expense
            }
        })
        default: 
        return state;
     }
}

//Filters Reducer 
const filterReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filterReducer =  (state = filterReducerDefaultState,action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
        return {                //Always return new object. Dont change state.
            ...state,
            text: action.text
        }
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy:'amount'
        }
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy:'date'
        }
        case 'SET_START_DATE':
        return {
            ...state,
            startDate:action.startDate
        }
        case 'SET_END_DATE':
        return {
            ...state,
            endDate:action.endDate
        }
        default:
        return state
    }
}

//Get visible expenses
const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) => {
   return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    //console.log('TextMatch',textMatch)

    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b) => {
      if(sortBy === 'date'){
          return a.createdAt < b.createdAt ? 1:-1
      }
      else if (sortBy === 'amount'){
          return a.amount < b.amount ? 1:-1
      }

  })
}

const store =  createStore(combineReducers({
    expenses:expensesReducer,
    filters: filterReducer
}))

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)

})

const expenseOne = store.dispatch(addExpense({description:'Rent',amount:500,createdAt:1000})) // The store.dispatch function also returns the action object.
const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:300,createdAt: -1000}))

// //store.dispatch(removeExpense({id:expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}))
 //store.dispatch(setTextFilter('fee'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

//store.dispatch(setStartDate(125))
//store.dispatch(setEndDate(1250))
const demoState = {
    expenses:[{
        id:'asdasfqq',
        description:'Jan rent',
        note:'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }
};