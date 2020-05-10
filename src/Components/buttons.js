
import React from 'react';
import './buttons.css';
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { SetLocation, SetNavbar } from '../actions/mainActions';


const OutlineButton= props =>
{   
    const history=useHistory();
    const onClick=(e)=>
    {
        if(props.onClick)
        props.onClick(e); 
        if(props.Link)
        history.push(props.Link);
    }
    return <button 
    onClick={onClick} 
    style={{fontSize:`${props.fontSize}rem`,width:props.width}}
    className={`btn btn-outline ${props.color} ${props.className}`}>
    {props.children}
    </button>}

const RaisedButton= props => <button onClick={props.onClick} className={`btn  ${props.color} ${props.className}`}>{props.children}</button>

const LinkRaisedButton = props =>
{
    const history=useHistory();
    
    const onClick=(e)=>
    {
    if(props.onClick)
         props.onClick(e); 
    if(props.Link)
        history.push(props.Link);

    }
    return(
    <button onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={onClick} className={`btn  ${props.color} ${props.className}`} style={{width:`${props.width}`}}>
        {props.children}
    </button>
    )
} 

const LinkFlatButton = props =>
{
    const history=useHistory();
    const dispatch=useDispatch();
    const main=useSelector(state=>state.main);
    const onClick=(e)=>
    {
    if(props.onClick)
         props.onClick(e); 
    if(props.Link)
     { 

        history.push(props.Link);
        dispatch(SetLocation(props.Link));
        dispatch(SetNavbar(true));
     }
    }
    return(
    <button  onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={onClick} className={`btn flat ${props.color} `}
     style={{width:`${props.width}`,backgroundColor:(props.StayClicked && main.isNavbarOpen)?'var(--primary-light)':''}}>
        {props.children}
    </button>
    )
} 

const FlatButton = props =>
{
   
    return(
    <button onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={props.onClick} className={`btn flat ${props.color} `} style={{width:`${props.width}`,border:`${props.border}`}}>
        {props.children}
    </button>
    )
} 

export {OutlineButton,RaisedButton,FlatButton,LinkFlatButton,LinkRaisedButton}

