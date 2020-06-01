
import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'  //Provider allows us to provide the store to all the components that make up our application.
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
console.log(store.getState())
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log('Visible Expenses:',visibleExpenses)
})

//addExpense -> water bill
store.dispatch(addExpense({description:'water bill',amount:'8000',createdAt:1000}))
//addExpense -> gas bill
store.dispatch(addExpense({description:'gas bill',amount:'5120',createdAt:-1000}))
store.dispatch(addExpense({description:'waterlatest bill',amount:'5000',createdAt:1000}))
// store.dispatch(setTextFilter('gas'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('Water'))
// },3000)

// class Header extends React.Component{
//     render() {       //render function in React components must always be defined.
//         return (
//         <div>
//             <h1>{this.props.title}</h1>
//             <h3>{this.props.subtitle}</h3>
//         </div> )
//     }
// }


// class Action extends React.Component {
//     // handlePick(){
//     //     alert('This is the handlePick function')
//     // }
//     render(){
//         return(
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
//             </div>
//         )

//     }
// }



// class Options extends React.Component{
//     // constructor(props){
//     //     super(props)
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this)
//     // }
//     // handleRemoveAll(){
//     //     alert('This is the removeAll function')
//     // }

//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => {
//                         return <Option key={option} optionText={option}/> // Reuse the Option component. Need to set key for in map.Unique Identifier
//                     })
//                 }
//             </div>
//         )
//     }
// }



// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                Option: {this.props.optionText}
//             </div>
//         )
//     }
// }



const appRoot = document.getElementById('app')
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, appRoot);

