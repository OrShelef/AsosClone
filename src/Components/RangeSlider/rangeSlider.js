import React,{useState, useRef} from 'react'
import classes from './rangeSlider.module.css';
const RangeSlider = () => 
{
    const ref1=useRef(null);
    const ref2=useRef(null);

    const onChange=(e)=>{
        console.log(ref1.current.value);
        console.log(ref2.current.value);
        
        if(ref2.current.value >= ref1.current.value)
        ref2.current.value = ref1.current.value

    }
    return (
        <div className={classes.main}>
           <input onChange={onChange}  ref={ref1}  type="range"/>
           <input onChange={onChange}  ref={ref2}  type="range"/>

        </div>
    )
}

export default RangeSlider
