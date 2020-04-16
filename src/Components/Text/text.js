
import React from 'react'
import classes from './text.module.css';
import './text.css';
const HeaderBackground=(props)=>
{


    return(
        <div>
        <h1 className={`${classes.main} ${props.className}`}>
           {props.children}
        </h1>
        </div>
        
    )
}

export default HeaderBackground;