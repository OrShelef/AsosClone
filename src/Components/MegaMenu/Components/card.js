
import React from 'react'

import classes from './card.module.css';

const CardMenuItem=(props)=>{
    return(
        <div className={`${props.className} ${classes.main}`}> 
        <div className={classes.card_img}>
        <img src={props.image} alt={props.caption}/>
        <h1>
           {props.caption} 
        </h1>
        </div>
        <div className={classes.text}>
            <h3>
                {props.text}
            </h3>
        </div>
        </div>
    )
}

export default CardMenuItem;