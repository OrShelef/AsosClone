
import React, { useState, Fragment } from 'react'
import classes from './dropdown.module.css';
import {FlatButton, IconButton} from '../buttons';
import {useSelector,useDispatch} from 'react-redux';
import {SetIsOpen} from '../../actions/dropdownActions';
const AccountDropDown=(props)=>
{
    const [isOpen,SetState]=useState(true);
    const dispatch=useDispatch();
    const dropdown=useSelector(state=>state.dropdown);
    const items=[
        {header:'My Account',icon:'far fa-user'},
        {header:'My Orders',icon:'fas fa-box'},
        {header:'Returns Information',icon:'fas fa-people-carry'},
        {header:'Contact Prefrences',icon:'fas fa-comment-dots'},
    ];
  const calcTop=()=>
  {
    if(!dropdown.pos)return 0;
    const pos=dropdown.pos;
  
    return `${pos.y + pos.height}px`
  }

  const calcLeft=()=>
  {
    if(!dropdown.pos)return 0;
    const pos=dropdown.pos;
  
    return `${pos.x + pos.width/2 - 150}px`
  }

  const onMouseEnter=()=>
  { SetState(true);
    dispatch(SetIsOpen(true))
  }
  const onMouseLeave=()=>
  {
    console.log("");
    
    SetState(false);
    setTimeout(() => {
      dispatch(SetIsOpen(false))
      SetState(true);
    }, 200)
    
   
  }
  if(!dropdown.isOpen)return <Fragment/>;
  
  return  <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${classes.main} ${isOpen?"":classes.slideOut}`} style={{top:calcTop(),left:calcLeft()}}>
        <div className={classes.arrow}></div>
        <div className={`${classes.header} row`}>
            <a>Sign in</a>
            <span className="vl"/>
                <a>Join</a>
            <span className="space"/>
            <FlatButton onClick={onMouseLeave} color="primary" width="20%">
            <i className="far fa-times-circle"></i>
            </FlatButton>
        </div>
        <ul className={classes.list}>
         { items.map(item=>
            <li key={item.header}>
               <a>
                   <div className={classes.list_item_grid}>
                   <i className={item.icon}></i>
                   <p>{item.header}</p>
                   </div>
               </a>
           </li>
         ) 
        }
        </ul>
    </div>
}



export default AccountDropDown;