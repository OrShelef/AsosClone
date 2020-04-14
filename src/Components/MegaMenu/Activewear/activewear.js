import React, { Component } from 'react'
import classes from  './activewear.module.css';
import Thumbnail from '../Components/thumbnail';
import AvatarList from '../Components/avatarList';


const ActivewearMenu=(props)=>
{  
  







  const avatarList=[
    {image:'https://images.asos-media.com/navigation/mw_sr_activewear_shopbyactivity_football_3m_1346093?&$n_240w$',text:'Football'},
    {image:'https://images.asos-media.com/navigation/mw_sr_activewear_shopbyactivity_golf_3m_1416633?&$n_240w$',text:'Golf'},
    {image:'https://images.asos-media.com/navigation/mw_sr_activewear_shopbyactivity_gym_3m_1394767?&$n_240w$',text:'Gym & Training'},
    {image:'https://images.asos-media.com/navigation/mw_sr_activewear_shopbyactivity_outdoors_3m_1414496?&$n_240w$',text:'Outdoors'},
    {image:'https://images.asos-media.com/navigation/mw_sr_activewear_shopbyactivity_running_3m_1405666?&$n_240w$',text:'Running'},
    {image:'https://images.asos-media.com/navigation/MW_Activewear+Swim_5WL_1164203_240418?&$n_240w$',text:'Swim'},

  ]

 






 const items=['30% off sneaker brands','View all','Accessories','Footwear','Jackets','Shorts','Swim','Tops','Trousers & Tights'];

 return(

    <div className={`${classes.main}`}>
      <div>
        <h1 className="mega-menu-item-header">SHOP BY PRODUCT</h1>
        <ul className={`mega-menu-item-list ${classes.list}`}>
        {items.map(item=> <li key={item}><a>{item}</a></li>)}
        </ul>
      </div>
     
      <div id={classes.column}>
        <h1 id={classes.header2} className="mega-menu-item-header">
        SHOP BY ACTIVITY
        </h1>
        <AvatarList items={avatarList} isListItem={true}/> 
      </div>
     
     <div className="row" id={classes.thumbs}>
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_activewear_nike_2wl_1559287?&$n_320w$">NIKE</Thumbnail>
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_activewear_running_2wl_1578769?&$n_320w$">Running</Thumbnail>    
    </div>   
    </div>
 
)}

export default ActivewearMenu;
