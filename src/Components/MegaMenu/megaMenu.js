import React, { Component } from 'react'
import './megaMenuStyles.css';
import classes from './megaMenu.module.css';
import {useSelector,useDispatch} from 'react-redux';
import SaleMenu from './Sale/saleMenu';
import NewInMenu from './NewIn/newIn';
import ClothingMenu from './Clothing/clothing';
import ShoesMenu from './Shoes/shoes';
import AccessoriesMenu from './Accessories/accessories';
import ActivewearMenu from './Activewear/activewear';
import FaceBodyMenu from './FaceBody/faceBody';
import BrandsMenu from './Brands/brands';
import OutletMenu from './Outlet/outlet';
import MarketplaceMenu from './Marketplace/marketplace';
import InspirationMenu from './Inspiration/inspiration';
 const MegaMenu=(props)=>
{
    const state=useSelector(state=>state.megaMenu);
    const menu_items=['Sale','New In','Clothing','Shoes','Accessories','Activewear','Face + Body','Brands','Outlet','Marketplace','Inspiration'];
    let menu;
    switch (state.selected) 
    {
        case 'Sale':          
            menu=<SaleMenu/>
            break;
        case 'New In':          
            menu=<NewInMenu/>
            break;
        case 'Clothing':          
            menu=<ClothingMenu/>
            break;
        case 'Shoes':          
            menu=<ShoesMenu/>
            break;
            case 'Accessories':          
            menu=<AccessoriesMenu/>
            break;
        case 'Activewear':          
            menu=<ActivewearMenu/>
            break;
        case 'Face + Body':          
            menu=<FaceBodyMenu/>
            break;
        case 'Brands':          
            menu=<BrandsMenu/>
            break;
            case 'Outlet':          
            menu=<OutletMenu/>
            break;
        case 'Marketplace':          
            menu=<MarketplaceMenu/>
            break;
            case 'Inspiration':          
            menu=<InspirationMenu/>
            break;
       
        default:
            break;
    }
  return (
  <div className={classes.main}>
    {menu}
  </div>)
 
}


export default MegaMenu;