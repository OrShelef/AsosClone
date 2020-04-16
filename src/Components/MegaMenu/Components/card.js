
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

const SimpleCard=(props)=>{

    return(
        <div className={`${props.className} ${classes.simple_card}`}>       
        <img className={classes.simple_card_image} src={props.image} alt={props.text}/>
        <div className={classes.simple_card_text}>
            <h3>
                {props.text}
            </h3>
        </div>
        </div>
    )
}

export { CardMenuItem,SimpleCard}