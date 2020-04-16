import React from 'react'
import classes from  './faceBody.module.css';
import Thumbnail from '../Components/thumbnail';
import AvatarList from '../Components/avatarList';


const FaceBodyMenu=(props)=>
{  
  
 const items=['View all',' New in','Body care','Gifts','Hair care','Makeup','Shaving & Grooming','Skin care','Tools & Accessories'];
 const items2=['Apothecary 87','Elemis','Hanz de Fuko','House 99','Murdock London','Wahl','View all brands'];

 return(

    <div className={`${classes.main}`}>
      <div>
        <h1 className="mega-menu-item-header">SHOP BY PRODUCT</h1>
        <ul className={`mega-menu-item-list ${classes.list}`}>
        {items.map(item=> <li key={item}><a href={`#${item}`}>{item}</a></li>)}
        </ul>
      </div>
     
      <div id={classes.column}>
        <h1 id={classes.header2} className="mega-menu-item-header">
        SHOP BY BRAND
        </h1>
        <ul className={`mega-menu-item-list ${classes.list}`}>
        {items2.map(item=> <li key={item}><a href={`#${item}`}>{item}</a></li>)}
        </ul>
      </div>
     
     <div  id={classes.thumbs}>
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_face_and_body_the_ordinary_3wl_1087441?&$n_320w$">The Ordinary</Thumbnail>
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_f%2bb_shaving_beard_3wl?&$n_320w$">Shaving & Grooming</Thumbnail>    
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_face_and_body_hair_styling_3wl_1268721?&$n_320w$">Hair care</Thumbnail>    
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_face_and_body_skincare_3wl_1499563?&$n_320w$">Skin care</Thumbnail>    
    </div>   
    </div>
 
)}

export default FaceBodyMenu;
