import React from 'react';
import './signUpForm.css';
import {RaisedButton} from '../buttons'
import CheckBox from '../checkBoxes';
import TextBox from '../inputs';
import User from '../../Models/User';



class SignUpForm extends React.Component
{
   constructor(props){
       super(props);
       this.state={
           newUser:new User()
       }
   }
render(){
    const handleInput=(e) =>{
      
        
        let value = e.target.value;
        let name = e.target.name;
     
        this.setState( prevState => {
           return { 
              newUser : {
                       ...prevState.newUser, [name]: value
                      }
           }

        })
       
        
    }
    return (
    <form onSubmit={(event)=>this.props.onSubmit(event,this.state.newUser)} className="signup-form">
        <TextBox onChange={handleInput} placeholder="First Name" name="firstName" />
        <TextBox onChange={handleInput} placeholder="Last Name"  name="lastName"/>
        <TextBox onChange={handleInput} className="col-span"  placeholder="E-mail"   type="email"    name="email"/>
        <TextBox onChange={handleInput} className="col-span"  placeholder="Password" type="password" name="password">
        <i className="far fa-eye-slash icon"></i>
        </TextBox>

        <CheckBox className="col-span" text="I Accept the Terms" />

        <RaisedButton className="col-span">Sign Up</RaisedButton>
                        
    </form>
    );

    }

   
}

export default SignUpForm;