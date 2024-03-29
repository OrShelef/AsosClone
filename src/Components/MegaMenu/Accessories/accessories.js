import React, { useEffect } from 'react'

import classes from  './accessories.module.css';
import Thumbnail from '../Components/thumbnail';
import AvatarList from '../Components/avatarList';
import {Link} from 'react-router-dom'
import axios from 'axios';
const AccessoriesMenu=(props)=>
{  
  
  const avatarList=[
    {image:'https://images.asos-media.com/navigation/mw_shoes_sbb_asosdesign_5wl_1592913?&$n_240w$',text:'ASOS DESIGN'},
    {image:'https://images.asos-media.com/navigation/mw_shoes_sbb_drmartens_5wl_1620464?&$n_240w$',text:'BOSS'},
    {image:'https://images.asos-media.com/navigation/shoes_lacoste_3m_1319131?&$n_240w$',text:'Eastpak'},
    {image:'https://images.asos-media.com/navigation/mw_shoes_sbb_riverisland_5wl_1681969?&$n_240w$',text:'Ray-Ban'},
    {image:'https://images.asos-media.com/navigation/mw_shoes_sbb_timberland_5wl_1616270?&$n_240w$',text:'Sekonda'},
    {image:'https://images.asos-media.com/navigation/mw_shoes_sbb_walklondon_5wl_1602748?&$n_240w$',text:'Twisted Tailor'},
  ]

  useEffect(() => {
    
    return () => {
      axios.get(`${process.env.REACT_APP_API}/Filters/${props.depName}`)
    }
  }, []);
 const items=['View all','New in','Bags','Belts','Caps & Hats','Gifts','Jewellery','Scarves','Socks','Sunglasses','Ties','Wallets','Watches'];

 return(

    <div className={`${classes.main}`}>
      <div>
        <h1 className="mega-menu-item-header">SHOP BY PRODUCT</h1>
        <ul className={`mega-menu-item-list ${classes.list}`}>

            {items.map(item=> <li key={item}><Link to='/man/shopByProduct/Accessories'>{item}</Link></li>)}
        </ul>
      </div>
     
      <div id={classes.column}>
        <h1 id={classes.header2} className="mega-menu-item-header">
           SHOP BY BRAND
        </h1>
        <AvatarList items={avatarList} isListItem={true}/> 
      </div>
     
     <div className="row" id={classes.thumbs}>
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_shoes_utility_footwear_2wl_1592910?&$n_320w$">Utility Footwear</Thumbnail>
         <Thumbnail className={classes.thumbnail} image="https://images.asos-media.com/navigation/mw_shoes_adidassuperstar_2wl_1545546?&$n_320w$">New-Season trainers</Thumbnail>    
    </div>   
    </div>
 
)}

export default AccessoriesMenu;
