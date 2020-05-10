import React from 'react';
import classes from './InputForm.module.css';

const InputForm = props => {
    return (
        <div className={classes.inputContainer} style={{width:props.width?props.width:'65%'}}>
             {props.text && <label htmlFor={props.name}>{props.text}:</label>}
             <div>
                 <input placeholder={props.placeholder} ref={props.formcontrol({required:props.required,minLength:props.min,validate:props.validate})} type={props.type} name={props.name} id={props.name}/>
                    {props.icon && <img src={props.icon}/>}
             </div>
            {props.validation && <p>{props.validation}</p>}
        </div>
    )
}

export default InputForm;