
import React,{useState,useRef} from 'react'
import classes from './radiobutton.module.css';

const RadioButton = ({value,name,selected,onChange,register}) => 
{
   
   
    return (
        <div onClick={()=>onChange(value)} className={classes.main}>
            <input ref={register} value={value} onChange={(e)=>{}} checked={selected==value} name={name} type="radio"/>
            <div>
                <span/>
            </div>
        <label>{value}</label>
        </div>
    )
}

export default RadioButton
