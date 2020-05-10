
import React, { useState } from 'react'


const RadioButtonGroup = (props) => {
   
    
    const val=props.type!="checkbox"? props.children[0].props.value:null;
    const [selected, setSelected] = useState(val);
    const register=props.register;
    const onChange=(value)=>
    {
        setSelected(value);
    }
  
    
    return (
        <div className={`row ${props.className}`} style={{width:`${props.width}`}}>
            {React.Children.map(props.children,child=>
                React.cloneElement(child,{...child.props,selected,onChange,register})
            )}
        </div>
    )
}

export default RadioButtonGroup
