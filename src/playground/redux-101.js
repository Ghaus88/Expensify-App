import {createStore, bindActionCreators} from 'redux';

// The incrementBy function is destructured directly from the input object in the incrementCount function.
//Also sets default value to 1 if incrementBy doesn not exist.
const incrementCount = ({incrementBy = 1} = {}) => ({  //implicitly returns an object.
    type:'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
})

const resetCount = ({count = 180} = {}) => ({
    type:'RESET',
    count
})

const setCount = ({count = 1} = {}) => ({
    type:'SET',
    count
}) 

//Reducers are function that determine what to do with the action object.
//Reducers are pure functions where they only depen
//Reducer never change state or function.

const countReducer = (state = { count:0}, action ) => {
    switch(action.type){
        case 'INCREMENT':
        // const incrementBy = typeof action.incrementBy === 'number'? action.incrementBy:1  //To pass in dynamic values
        return {
            count: state.count + action.incrementBy
        }
        case 'DECREMENT':
        // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy:1
        return {
            count: state.count - action.decrementBy
        }
        case 'SET' :
        return {
           count: action.count
        }
        case 'RESET':
        return {
            count: 0
        }
        default : 
        return state
    }  
}

const store = createStore(countReducer)

// Action are objects that get sent to the store.

const unsubscribe = store.subscribe(() => {   //This function is to watch for changes to the store's state. It also returns a funciton to unsubscribe.
    console.log(store.getState())
})

// store.dispatch({
//     type:'INCREMENT', 
//     incrementBy: 5
// })

store.dispatch(incrementCount())
store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy:10}))

store.dispatch(resetCount())
store.dispatch(resetCount({count:0}))

store.dispatch(setCount())
store.dispatch(setCount({count:121}))
// store.dispatch({
//     type:'RESET'
// })

// store.dispatch({
//     type:'DECREMENT'
// })

// store.dispatch({
//     type:'DECREMENT',
//     decrementBy:10
// })

// store.dispatch({
//     type:'SET',
//     count:101
// })
