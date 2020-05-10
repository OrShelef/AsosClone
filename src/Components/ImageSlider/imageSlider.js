import React,{useState} from 'react'
import classes from './ImageSlider.module.css';
const ImageSlider = ({onClick,CurrentImage,render,direction}) =>
 {
     
  
     
    return (
        <div className={classes.main} >
         
                <div>
                    <i onClick={()=>onClick()} className="fas fa-chevron-left"></i>
                    <i  onClick={()=>onClick(false)} className="fas fa-chevron-right"></i>
                </div>
               
                {render?<img className={direction==null?
                '':  direction ? classes.slideLeft:classes.slideRight} src={CurrentImage} alt=''/>:''}
               
               
           
        </div>
    )
}

export default ImageSlider
