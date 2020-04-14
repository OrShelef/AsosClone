import React, { useState } from 'react'
import logo from '../../assets/asos-logo.png'
import {FlatButton} from '../buttons';
import SearchBar from '../SearchBar/search';
import classes from  './navbar.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {SetPosition, SetIsOpen} from '../../actions/dropdownActions';
import {SetSelected,GetSelected} from '../../actions/megaMenuActions';
import MegaMenu from '../MegaMenu/megaMenu';
const Navbar= props => 
{
    const menu_items=['Sale','New In','Clothing','Shoes','Accessories','Activewear','Face + Body','Brands','Outlet','Marketplace','Inspiration'];
    const [megaMenuPosition,setMegaMenuPosition]=useState({top:0,left:0});
    const [isHover,setIsHover]=useState(false);
    const [currentMenuItem,SetCurrentMenuItem]=useState(-1);
    const dispatch=useDispatch();

    const onMouseEnter=(e)=>
    {   
        var pos=e.target.getBoundingClientRect();
        dispatch(SetPosition(pos));
        dispatch(SetIsOpen(true));
    }
    const onMouseLeave=(e)=>
    {   
       
        dispatch(SetIsOpen(false));
    }
    
    const onListItemHover=(item,target,index)=>
    {
       
        var pos=target.getBoundingClientRect();
        setMegaMenuPosition({top:pos.top+pos.height});
        setIsHover(true);
        SetCurrentMenuItem(index);
        dispatch(SetSelected(menu_items[index]));
      
    }

    const onMenClick=(target)=>{
      
    }
    return (
    <div  className={`${classes.main} col`}>
        <div className={`${classes.container} row`}>
          <div className={`${classes.flat_buttons} row`}>
              <img className={classes.logo} src={logo} alt='logo'/>
              <FlatButton>Women</FlatButton>
              <FlatButton onClick={onMenClick}>Men</FlatButton>
          </div>

          <SearchBar className={classes.search_bar}/>

          <div className={`${classes.icon_buttons} row`}>
              <FlatButton  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                     <i className="far fa-user"></i>
              </FlatButton>
              <FlatButton><i className="far fa-heart"></i></FlatButton>
              <FlatButton><i className="fas fa-shopping-bag"></i></FlatButton>
          </div>
        </div>
        <div className={`${classes.menu} row`}>
            <ul>
                {menu_items.map((item,index)=>
                <li onMouseLeave={()=>setIsHover(false)}  className={isHover && index===currentMenuItem?classes.active:''} onMouseEnter={(e)=>onListItemHover(item,e.target,index)} key={item}>
                    <a>{item}</a>
                    </li>
                    )}
            </ul>
        </div>
        {isHover && <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} style={{top:megaMenuPosition.top,left:'10%'}} className={`${classes.menu_open} row`}>
            <MegaMenu></MegaMenu>
        </div>}
    </div>
    
    )
}

export default Navbar;