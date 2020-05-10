
import React from 'react'

import classes from './breadCrumbs.module.css';
import {useSelector} from 'react-redux';
import { Link,useRouteMatch } from 'react-router-dom';



const BreadCrumbs= (props)=>
{
  
   
    let { path, url } = useRouteMatch();
    

    
    return (
    <div className={classes.main}>
           
            <ul> 
                <Link to="/Home">Home</Link> 
                {
              

               
              url.split('/').filter(item=>item!='')
            .map((item,index)=>{
             
                return (
                    <li key={item} className={`row`}>
                    <i  style={{fontSize:'.7rem'}} className="fas fa-chevron-right"></i>
                   
                    <Link  to={url.split(item)[0]+item }>{item}</Link>
                   
                    </li>
                )
           
            }
            )} </ul>
        </div>
    )
}

export default BreadCrumbs;