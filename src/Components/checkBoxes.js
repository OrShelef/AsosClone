
import React,{useState} from 'react';
import './checkBoxes.css';

const CheckBox=props=>{


    var inputChecked=props.checked?props.checked:false;
    const [state,setState]=useState({checked:inputChecked});


    const onChecked =() => {
        setState({checked:!state.checked});
        if(props.onChecked){
            props.onChecked(!state.checked);
        }
    }   

    return(
    <div onClick={onChecked} className={`checkbox row ${props.className}`}>
            <input ref={props.register} name={props.name ?props.name:props.text} checked={state.checked} type="checkbox"/>
             <div className="checkbox-container">
             <i  className={state.checked?"fas fa-check center animate":""}></i>
         </div>
        <label>{props.text}</label>
    </div>
    );
}

export default CheckBox;