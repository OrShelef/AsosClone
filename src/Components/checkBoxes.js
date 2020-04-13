
import React,{useState} from 'react';
import './checkBoxes.css';

const CheckBox=props=>{


    var inputChecked=props.checked?props.checked:false;
    const [state,setState]=useState({checked:inputChecked});


    const onChecked =() => {
        setState({checked:!state.checked});
    }   

    return(
    <div onClick={onChecked} className={`checkbox row ${props.className}`}>
             <div className="checkbox-container">
             <i  className={state.checked?"fas fa-check center animate":""}></i>
         </div>
        <label>{props.text}</label>
    </div>
    );
}

export default CheckBox;