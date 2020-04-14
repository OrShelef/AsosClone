import React, { Component } from 'react'

import classes from  './newIn.module.css';
import Thumbnail from '../Components/thumbnail';

const NewInMenu=(props)=>
{   

const items=['View all','Clothing','Shoes','Accessories','Face + Body','Back in stock','Outlet','ASOS DESIGN','Trending now'];

 return(

    <div className={`${classes.main}`}>
      <div>
        <h1 className="mega-menu-item-header">NEW PRODUCTS</h1>
        <ul className="mega-menu-item-list">
        {items.map(item=> <li key={item}><a>{item}</a></li>)}
        </ul>
      </div>
      <div id={classes.column}>
          <h1 id={classes.header2} className="mega-menu-item-header">
          NEW EDITS
          </h1>
          <div className="row space-around">
          <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_gl_activewear_1650x1884_1703?&$n_320w$">
            Stay strong indoors
          </Thumbnail>
          <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_us_nav_1650x1884_2303?&$n_320w$">
           LoungWear
          </Thumbnail>
          <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_gl_ellesse_1650x1884_2303?&$n_320w$">
             ellesse X Smiley
          </Thumbnail>
          </div>
        
      </div>
      
       
    </div>
    
)}

export default NewInMenu;