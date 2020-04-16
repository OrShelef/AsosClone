import React from 'react';
import './login.css';
import {OutlineButton} from '../Components/buttons';
import SignUpForm from '../Components/Forms/signUpForm';

import axios from 'axios';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={title:props.title}
        this.onSubmitSignUp=this.onSubmitSignUp.bind();
    }


    onSubmitSignUp= (event,user) => {
        axios.post(`${process.env.REACT_APP_API}/signUp`,user).then(
            res=>{
                if(res.data.status==='ok')
                {

                }
                else
                {
                alert(res.data.reason);
                }
            }
        )
       
        event.preventDefault();
    }


    render() {
        return (
            <div className='main'>
                <div className="main-login">
                    <h1  className='title'>{this.state.title}</h1>
                    <div className='login center'>
                        <h2>Already Signed Up?</h2>
                        <p>Some dummy text for example</p>
                        <OutlineButton>Log In</OutlineButton>
                    </div>    
                </div>
                <div className="main-signUp">
                    <h2>Sign Up For An Account</h2>
                    <p>is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer
                    </p>

                    <SignUpForm onSubmit={this.onSubmitSignUp}/>
                    
                    <p>Or sign up using</p>
                    <div className="row space-around">
                        <button className="btn-outline primary"><i className="fab fa-google"></i></button>
                        <button className="btn-outline primary"><i className="fab fa-facebook"></i></button>
                        <button className="btn-outline primary"><i className="fab fa-twitter"></i></button>
                    </div>

                </div>
               
            </div>
        )
    }
}


export default Login;

