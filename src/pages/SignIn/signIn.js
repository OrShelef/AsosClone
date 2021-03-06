import React, { useEffect } from 'react';
import classes from './signIn.module.css';
import UserAuthType from './Components/UserAuthType/userAuthType'
import Seprator from './Components/Separator/separator'
import SocialMediaButtons from './Components/SocialMediaButtons/socialMediaButtons';
import {useDispatch } from 'react-redux';
import {SetHeaderAndFooter, SetCurrentUser } from '../../actions/mainActions';
import {useForm} from 'react-hook-form';
import InputForm from './Components/InputForm/inputForm';
import {useHistory} from 'react-router-dom';
import UserAPI from '../../Backend/UserAPI';

const SignIn = props =>
 {
    const dispatch=useDispatch();
    useEffect(() => {
       
        
        dispatch(SetHeaderAndFooter(false));
        return () => {
            
        }
    }, [])
  
  
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <a href='#'>
                    <div className={classes.logo}></div>
                </a>
            </div>
            <div className={classes.container}>
                <UserAuthType type="signIn"/>
                <SignInForm/>
                <Seprator title='SIGN IN WITH...'/>
                <SocialMediaButtons/>
            </div>
        </div>
    )
}


const SignInForm = props => {
    const dispatch=useDispatch();
    const history = useHistory();
    const {register,handleSubmit,formState} =useForm({mode:'onChange'});
    const onSubmit= async(data)=>
    {
      
       const response = await new UserAPI().Login(data);
       if(response.data.status=='success') 
       {
           const user={email:response.data.data.email,password:response.data.data.password};
           localStorage.setItem("savedUser",JSON.stringify(user));
           dispatch(SetCurrentUser(response.data.data))
           history.push('/man');
       }
        
    }
    return (
        <div className={classes.mainForm}>
            <h1>Sign in with email</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm width="100%"
                required formcontrol={register} type='email' name='email'  text="Email Address"
                />
                <InputForm width="100%"
                required formcontrol={register} type='password' name='password' text="Password"
                />
                <button disabled={!formState.isValid} type='submit'>Sign In</button>
            </form>
            <p><a href="#">Forgot password?</a></p>
        </div>
    )
}

export default SignIn;