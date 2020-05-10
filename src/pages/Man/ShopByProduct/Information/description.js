
import React, { createRef,useState,useEffect } from 'react';

import classes from './description.module.css';

const PageDescription = props => {

    const [isOpen,setisOpen]=useState(false);

    useEffect(() => {
        
console.log(document.getElementById('para').style.height);
     
        return () => {
            
        }
    }, [])

    const btnText=isOpen?'View Less':'View More';
    return(
        <div className={classes.main} >
            <h1>{props.header}</h1>
            <p id="para" style={{WebkitLineClamp:isOpen?'15':'3'}}>{props.description}</p>
            <a onClick={()=>setisOpen(!isOpen)}>{btnText}</a>
        </div>
    )
    
}

export default PageDescription;