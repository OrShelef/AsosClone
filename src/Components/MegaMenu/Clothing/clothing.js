import React, { Component } from 'react'

import classes from  './clothing.module.css';
import AvatarList from '../Components/avatarList';
import Avatar from '../Components/avatar';

const ClothingMenu=(props)=>
{  

  const avatarList=[
    {image:'https://images.asos-media.com/navigation/mw_clothing_shopbyedit_festival_5wl_1409856?&$n_240w$',text:'Festival'},
    {image:'https://images.asos-media.com/navigation/mw_clothing_shopbyedit_holiday_5wl_1369744?&$n_240w$',text:'Holiday'},
    {image:'https://images.asos-media.com/navigation/mw_wk37_responsibleedit_2m_1410434?&$n_240w$',text:'Responsible edit'},
    {image:'https://images.asos-media.com/navigation/mw_clothing_shopbyedit_weddingattire_5wl_1378504?&$n_240w$',text:'Wedding'},
    {image:'https://images.asos-media.com/navigation/mw_clothing_shopbyedit_workwear_5wl_1407280?&$n_240w$',text:'Workwear'},
  ]
 const items=['New in','Activewear','Co-ords','Dungarees & Boiler Suits','Hoodies & Sweatshirts','Jackets & Coats'
 ,'Jeans','Joggers','Jumpers & Cardigans','Loungewear','Multipacks','Polo shirts','Shirts',
'Shorts','Socks','Suits','Swimwear','T-Shirts & Vests','Tracksuits & Joggers','Trousers & Chinos','Underwear'];

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
          SHOP BY RANGE
          </h1>
          <div className="row">
            <Avatar image="https://images.asos-media.com/navigation/mw_sale_plussize_6wl_1302038?&$n_240w$" text="Plus Size"/>
            <Avatar image="https://images.asos-media.com/navigation/mw_tall_2m?&$n_240w$" text="Tall"/> 
          </div>
        
      </div>
      <div id={classes.column}>
        <h1 id={classes.header2} className="mega-menu-item-header">
           SHOP BY EDIT
        </h1>
       <AvatarList items={avatarList} isListItem={true}/> 
      </div>
       
    </div>
 
)}

export default ClothingMenu;
