
import React from 'react'
import classes from './text.module.css';
import './text.css';
const HeaderBackground=({className,children,color="#2d2d2d",bg="var(--secondery)"})=>
{


    return(
        <div>
        <h1 className={`${classes.main} ${className}`} style={{backgroundColor:bg,color:color}}>
           {children}
        </h1>
        </div>
        
    )
}


export default HeaderBackground;