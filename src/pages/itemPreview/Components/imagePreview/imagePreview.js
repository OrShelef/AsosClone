import React, { useState, useEffect } from 'react'
import classes from './imagePreview.module.css';
import ImageSlider from '../../../../Components/ImageSlider/imageSlider';
import axios from 'axios';
const ImagePreview = ({product}) => 
{
    const [CurrentImage, setCurrentImage] = useState(product.Image);
    const [render, setRender] = useState(true);
    const [direction, setDirection] = useState(null);
    const [isVideo, setIsVideo] = useState(false);
    const [Index, setIndex] = useState(0);
    useEffect(() => 
    {
        if(product.Image)
        product.Media.Images.push(product.Image);
        axios.get('https://video.asos-media.com/products/puma-essentials-sweat-with-small-logo-in-navy/12173321-catwalk-AVS.m3u8')
        .then(res=>
            {
                product.Media.Video=res.data.slice(res.data.indexOf('http'),res.data.indexOf('m3u8')+4);
               
              
               
            }
            )
        
        return () => {
            
        }
    }, [])
    const onClick=(inc=true,index=null)=>
     {
        setIsVideo(false);
        setRender(false);
        if(inc==null && index !=null){
            setIndex(index);
            setCurrentImage(product.Media.Images[Index%5])
            setTimeout(() => {
                
              
                setRender(true);
               
            }, 0)
            return;
        }
        if(inc)
        {  
            if(Index+1>4)
              setIndex(0);
            else
             setIndex(Index+1);
        }
        else{
            if(Index-1<0)
            setIndex(4);
          else
           setIndex(Index-1);
        }
        setCurrentImage(product.Media.Images[Index%5])
        setTimeout(() => {
            
            setDirection(inc);
            setRender(true);
           
        }, 0)
        

         
     }
    return (
        <div className={classes.main}>
            <div className={classes.imageList}>
                <ul>
                    {product.Media.Images.slice(0,4).map((image,index)=><li  key={image} ><img onClick={()=>onClick(null,index)} src={image} alt={image}/></li>)}
                    <div onClick={()=>setIsVideo(!isVideo)} className={classes.iconButton}>
                        <i className="fas fa-play"></i>
                        <p>Video</p>
                     </div>
                </ul>
                <div className={classes.iconButton}>
                <i className="fas fa-upload"></i>
                    <p>Share</p>
                </div>
            </div>
       
        <div onClick={()=>setIsVideo(!isVideo)} className={`${classes.iconButton} ${classes.icon_mobile}`}>
                        <i className="fas fa-play"></i>
                        <p>Video</p>
        </div>
          { !isVideo? <ImageSlider render={render} direction={direction} onClick={onClick}  CurrentImage={CurrentImage}/>:
            <video autoPlay="autoPlay" loop={true}>
                <source src={product.Media.Video} type="application/x-mpegurl">
                </source>
            </video>}
        </div>
    )
}

export default ImagePreview
