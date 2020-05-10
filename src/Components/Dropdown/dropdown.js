
import React, { useState, Fragment } from 'react'
import classes from './dropdown.module.css';
import {FlatButton, IconButton} from '../buttons';
import {useSelector,useDispatch} from 'react-redux';
import {SetIsOpen} from '../../actions/dropdownActions';
import { Link } from 'react-router-dom';
import {SetCurrentUser} from '../../actions/mainActions'

const AccountDropDown=(props)=>
{
    const [isOpen,SetState]=useState(true);
    const dispatch=useDispatch();
    const dropdown=useSelector(state=>state.dropdown);
    const main = useSelector(state=>state.main);
    const items=[
        {header:'My Account',icon:'far fa-user',url:'/MyAccount'},
        {header:'My Orders',icon:'fas fa-box',url:'/MyAccount'},
        {header:'Returns Information',icon:'fas fa-people-carry',url:'/MyAccount'},
        {header:'Contact Prefrences',icon:'fas fa-comment-dots',url:'/MyAccount'},
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
  
    SetState(false);
    setTimeout(() => {
      dispatch(SetIsOpen(false))
      SetState(true);
    }, 200)
    
   
  }

  let userSigned =
          (
          <Fragment>
              <Link to='/SignIn'>Sign in</Link>
              <span className="vl"/>
              <a>Join</a>
              </Fragment>
          )
  if(main.currentUser.firstName) {

    userSigned = (
    <Fragment>
      <strong>Hi {main.currentUser.firstName}</strong>
      <Link onClick={()=>dispatch(SetCurrentUser({}))} to='/man'>Sign Out</Link>
    </Fragment>)
    
  }


  if(!dropdown.isOpen)return <Fragment/>;
  
  return  <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${classes.main} ${isOpen?"":classes.slideOut}`} style={{top:calcTop(),left:calcLeft()}}>
        <div className={classes.arrow}></div>
        <div className={`${classes.header} row`}>
            {userSigned}
            <span className="space"/>
            <FlatButton onClick={onMouseLeave} color="primary" width="20%">
            <i className="fas fa-times"></i>
            </FlatButton>
        </div>
        <ul className={classes.list}>
         { items.map(item=>
            <li key={item.header}>
               <Link to={item.url}>
                   <div className={classes.list_item_grid}>
                   <i className={item.icon}></i>
                   <p>{item.header}</p>
                   </div>
               </Link>
           </li>
         ) 
        }
        </ul>
    </div>
}



export default AccountDropDown;