import React from 'react';
import classes from './userAuthType.module.css';
import { Link } from 'react-router-dom';

const UserAuthType = ({type})=> {
    let signIn,signUp;
    if(type==="signIn")
    {
        signIn=classes.selected
        signUp=classes.unselected
    }
    else
    {
        signIn=classes.unselected
        signUp=classes.selected
    }
    return (
        <div className={classes.authType}>
            <span className={signUp}><Link  to="/SignUp">new to asos?</Link></span>
            <span className={signIn}><Link  to="/SignIn">Already registered?</Link></span>
        </div>
    )
}

export default UserAuthType;