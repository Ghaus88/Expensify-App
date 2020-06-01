import React from 'react'
import moment from 'moment'; // Use moment library for dates.
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'



const now = moment();
console.log(now.format('MMM Do YYYY'))

export default class ExpenseForm extends React.Component{
    state = {
        description : " ",
        note: " ",
        amount:" ",
        createdAt: moment()
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
        console.log(this.state.description)
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
        console.log(note)
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/))
        {
            this.setState(() => ({amount}))
        }
        console.log(amount)
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}))
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused:focused}))
    }
    render(){
        return (
            <div>
                <form>
                    <input 
                     type="text"
                     placeholder="Description"
                     autoFocus
                     value={this.state.description}
                     onChange={this.onDescriptionChange}
                    />
                   <input 
                    type="number"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                   />
                   <SingleDatePicker  //The minimum setup for this Date Picker component.
                   date={this.state.createdAt}
                   onDateChange={this.onDateChange}
                   focused={this.state.calendarFocused}
                   onFocusChange={this.onFocusChange}
                   numberOfMonths={1}
                   isOutsideRange={() => false}
                   />
                   <textarea 
                    placeholder="Add a note for your expense(optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                   >
                   </textarea>
                   <button>Add Expense</button>
                </form>
                
            </div>
        )
    }
}