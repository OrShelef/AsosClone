import React from 'react'
import classes from  './outlet.module.css';
import Thumbnail from '../Components/thumbnail';
import {Link} from 'react-router-dom'



const OutletMenu=(props)=>
{  

 const items=['View all','New in: Clothing','New in: Shoes & Accessories','Accessories','Activewear'
 ,'Bags','Giftsg','Hoodies & Sweatshirts','Jackets & Coats',
 'Jeans','Jewellery & Watches','Jumpers & Cardigans','Loungewear','Shirts','Shoes & Trainers',
'Shorts','Suits & Tailoring','Sunglasses','Swimwear','T-Shirts & Vests','Tracksuits','Trousers & Chinos','Underwear & Socks'];
 const items2=['Adidas','Brave Soul','Calvin Klein','Dune','French Connection','Kappa','Kurt Geiger','Original Penguin'
 ,'Puma','Vans','A-Z of brands'];
 return(

    <div className={`${classes.main}`}>
      <div>
        <h1 className="mega-menu-item-header">SHOP BY PRODUCT</h1>
        <ul className={`mega-menu-item-list ${classes.list}`}>
          {items.map(item=> <li key={item}><Link to='/man/shopByProduct/Outlet'>{item}</Link></li>)}

        </ul>
      </div>
     
      <div id={classes.column}>
        <h1 id={classes.header2} className="mega-menu-item-header">
        SHOP BY BRAND
        </h1>
        <ul className={`mega-menu-item-list ${classes.list2}`}>
        {items2.map(item=> <li key={item}><a href={`#${item}`}>{item}</a></li>)}
        </ul>
      </div>
     
     <div className='col' id={classes.thumbs}>
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_outlet_further_reductions_4wl_1649199?&$n_320w$">FURTHER REDUCTIONS: UP TO 70% OFF</Thumbnail>
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_outlet_sports_edit_4wl_1641113?&$n_320w$">Sports edit</Thumbnail>    
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_outlet_summerclothing_au_4wl_1589096?&$n_320w$">Spring edit</Thumbnail>    
 
    </div>   
    </div>
 
)}

export default OutletMenu;
