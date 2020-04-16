import React from 'react'

import classes from  './saleMenu.module.css';
import Thumbnail from '../Components/thumbnail';
import Avatar from '../Components/avatar';

const SaleMenu=(props)=>
{   
    const items=['SALE View All','SALE Accessories','SALE Bags','SALE Gifts','SALE Hoodies & Sweatshirts',
    'SALE Jackets & Coats',' SALE Jeans',' SALE Jewellery & Watches',' SALE Jumpers & Cardigans','  SALE Loungewear',' SALE Polo shirts',
    'SALE Shirts','SALE Shoes & Trainers','SALE Shorts','SALE Suits & Tailoring','SALE Sunglasses','SALE Swimwear'
    ,'SALE T-Shirts & Vests','SALE Tracksuits','SALE Trousers & Chinos','SALE Underwear & Socks','A-Z of brands']
 return(

    <div className={`${classes.main}`}>
      <div>
        <h1 className="mega-menu-item-header">SHOP SALE BY PRODUCT</h1>
        <ul className={`mega-menu-item-list ${classes.list}`}>
        {items.map(item=> <li key={item}><a href={`#${item}`}>{item}</a></li>)}
        </ul>
      </div>
      <div id={classes.column}>
          <h1 id={classes.header2} className="mega-menu-item-header">
          SHOP SALE BY RANGE
          </h1>
          <div className="row">
            <Avatar image="https://images.asos-media.com/navigation/mw_sale_plussize_6wl_1302038?&$n_240w$" text="Plus Size"/>
            <Avatar image="https://images.asos-media.com/navigation/mw_tall_2m?&$n_240w$" text="Tall"/>
          </div>
        
      </div>
      <div id={classes.column}>
           <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_sale_high_discount_2wl_1470749?&$n_320w$">
           Further reductions
             </Thumbnail>
      </div>
       
    </div>
    
)}

export default SaleMenu;