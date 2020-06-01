import React from 'react';
import ReactDOM from 'react-dom';

//Higher order components. A component that renders another component.
//Reuse code
//Render Hijacking
//Prop manipulation
//Abstract State

const Info = (props) => (      
    <div>
        <h1>Info</h1>
        <p>The info is:{props.info}</p>
    </div>
)

//The withAdminWarning combines a component with other information and returns a new component.
//Makes the code reusable. 
const withAdminWarning = (WrappedComponent) => {  
    return (props) => (
        <div>
            <p>This is private info. Please dont share</p>
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (     ///This returns the higher order component.
        <div>
          {props.isAuthenticated?  <WrappedComponent {...props}/> : <p>Please log in</p>}       
        </div>                              
    )
 }

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info='These are the details'/>,document.getElementById('app'))
