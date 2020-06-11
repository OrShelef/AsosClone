import React,{useState, useRef} from 'react'
import classes from './ImageSlider.module.css';
const ImageSlider = ({onClick,CurrentImage,render,direction}) =>
 {
     
  const ref = useRef(null);
     
    return (
        <div className={classes.main} >
         
                <div>
                    <i onClick={()=>onClick()} className="fas fa-chevron-left"></i>
                    <i  onClick={()=>onClick(false)} className="fas fa-chevron-right"></i>
                </div>
               
                {render?<img ref={ref} className={direction==null?
                '':  direction ? classes.slideLeft:classes.slideRight} style={{height:ref.current && ref.current.style.height}} src={CurrentImage} alt=''/>:''}
               
               
           
        </div>
    )
}

export default ImageSlider
