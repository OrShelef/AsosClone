import React from 'react';
import classes from  './inputs.module.css'



class TextBox extends React.Component
{


    constructor(props){
        super(props);
        this.state={
            children:this.props.children?this.props.children:null,
        required:this.props.required?this.props.required:true,
        type:this.props.type?this.props.type:"text" 
        }
        
    }

    
   
    
   render(){
  
   const{children,required,type}=this.state;    
    return (
        <div  className={this.props.className}>
            <label className={classes.floating_label}>{this.props.placeholder}</label>
            <input className={classes.main} onChange={this.props.onChange} name={this.props.name} type={type} placeholder={this.props.placeholder} required={required}/>
            {children}
        </div>
    );
   }
}

export default TextBox;