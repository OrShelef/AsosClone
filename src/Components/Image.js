

import React,{useState, useRef} from 'react'

const Image = ({src,alt="",key=Math.random()}) => 
{
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    
    return (
        <React.Fragment>
        <div className="center" style={{display: loading ? "block" : "none"}}>
           <img style={{width:'50%',height:'50%'}} src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif"/>
        </div>
        <img className="fade" style={{display: loading ? "none" : "block"}}
              key={key}
              alt={alt}
              src={src}
              onLoad={()=> setLoading(false)}/>
      </React.Fragment>
    )
}

export default Image;
