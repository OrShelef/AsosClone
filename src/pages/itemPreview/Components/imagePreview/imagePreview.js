import React, { useState } from 'react'
import classes from './imagePreview.module.css';
import ImageSlider from '../../../../Components/ImageSlider/imageSlider';

const ImagePreview = ({product}) => 
{
    const [CurrentImage, setCurrentImage] = useState(product.images[0].url);
    const [render, setRender] = useState(true);
    const [direction, setDirection] = useState(null);
    const [isVideo, setIsVideo] = useState(false);
    const [Index, setIndex] = useState(0);
    const images=[
        'https://images.asos-media.com/products/selected-homme-organic-cotton-chino-shorts-in-dusty-pink/14298268-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/selected-homme-organic-cotton-chino-shorts-in-dusty-pink/14298268-1-mellowrose?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/selected-homme-organic-cotton-chino-shorts-in-dusty-pink/14298268-3?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/selected-homme-organic-cotton-chino-shorts-in-dusty-pink/14298268-2?$XXL$&wid=513&fit=constrain'
    ,product.images[0].url]

    const onClick=(inc=true,index=null)=>
     {
        setIsVideo(false);
        setRender(false);
        if(inc==null && index !=null){
            setIndex(index);
            setCurrentImage(images[Index%5])
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
        setCurrentImage(images[Index%5])
        setTimeout(() => {
            
            setDirection(inc);
            setRender(true);
           
        }, 0)
        

         
     }
    return (
        <div className={classes.main}>
            <div className={classes.imageList}>
                <ul>
                    {images.slice(0,4).map((image,index)=><li  key={image} ><img onClick={()=>onClick(null,index)} src={image} alt={image}/></li>)}
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

          { !isVideo? <ImageSlider render={render} direction={direction} onClick={onClick}  CurrentImage={CurrentImage}/>:
            <video autoPlay="autoPlay" loop={true}>
                <source src="https://video.asos-media.com/products/ASOS/_media_/ba4/ba43a8b1-b031-4f55-b86d-253a05ff36a0.mp4" type="video/mp4">
                </source>
            </video>}
        </div>
    )
}

export default ImagePreview
