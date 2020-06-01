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

export default expensesReducer
