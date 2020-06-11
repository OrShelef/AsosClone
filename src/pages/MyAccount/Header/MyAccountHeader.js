

import React, { Fragment } from 'react'
import classes from './MyAccountHeader.module.css';
import {useHistory} from 'react-router-dom';
const MyAccountHeader = (props) => {

    const history=useHistory();
    const onBack=()=>{
        if(window.innerWidth<768)
        {
            history.push('/MyAccount');
        }
    }
    return (
        <Fragment>
        <div className={classes.main}>
                <i onClick={onBack} className="fas fa-chevron-left"></i>
                <i onClick={onBack} className={props.icon}></i>
                <h1>{props.header}</h1>
                <div id={classes.desktop}>
                    {props.children}
                </div>
        </div>
        <div  id={classes.mobile}>
        {props.children}
        </div>
        </Fragment>
    )
}

export default MyAccountHeader
