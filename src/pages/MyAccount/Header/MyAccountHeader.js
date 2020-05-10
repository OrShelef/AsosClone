

import React from 'react'
import classes from './MyAccountHeader.module.css';
const MyAccountHeader = (props) => {
    return (
        <div className={classes.main}>
                <i className={props.icon}></i>
                <h1>{props.header}</h1>
                {props.children}
        </div>
    )
}

export default MyAccountHeader
