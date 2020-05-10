import React from 'react'
import classes from  './brands.module.css';
import Thumbnail from '../Components/thumbnail';
import AvatarList from '../Components/avatarList';
import {Link} from 'react-router-dom'


const BrandsMenu=(props)=>
{  
 

 const items=['30% off sneaker brands','ASOS Brands','ASOS DESIGN','ASOS EDITION','ASOS MADE IN','ASOS 4505','Adidas','Bershka'
 ,'Calvin Klein','COLLUSION','Designer Brands','Fred Perry','Jack & Jones',
`Levi's`,'Nike','Polo Ralph Lauren','Reclaimed Vintage','River Island','The North Face','Vans','A-Z of brands'];
 
 return(

    <div className={`${classes.main}`}>
      <div>
        <h1 className="mega-menu-item-header">SHOP BY PRODUCT</h1>
        <ul className={`mega-menu-item-list ${classes.list}`}>
          {items.map(item=> <li key={item}><Link to='/man/shopByProduct/Brands'>{item}</Link></li>)}
        </ul>
      </div>

     <div  id={classes.thumbs}>
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_brands_collusion_3wl_1668106?&$n_320w$">COLLUSION</Thumbnail>
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_brands_asos_design_3wl_1651936?&$n_320w$">ASOS DESIGN</Thumbnail>    
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_brands_ellesse_3wl_1652619?&$n_320w$">Ellesse</Thumbnail>    
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_brands_asos_tommy_hilfiger_3wl_1654099?&$n_320w$">Tommy Hilfiger</Thumbnail>    
    </div>   
    </div>
 
)}

export default BrandsMenu;
