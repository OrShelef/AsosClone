
import React from 'react';
import './buttons.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { SetLocation } from '../actions/mainActions';


const OutlineButton= props => <button className={`btn btn-outline ${props.color} ${props.className}`}>{props.children}</button>

const RaisedButton= props => <button className={`btn  ${props.color} ${props.className}`}>{props.children}</button>

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
     }
    }
    return(
    <button  onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={onClick} className={`btn flat ${props.color} `}
     style={{width:`${props.width}`,backgroundColor:(props.StayClicked && main.location===props.Link)?'var(--primary-light)':''}}>
        {props.children}
    </button>
    )
} 

const FlatButton = props =>
{
   
    return(
    <button onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={props.onClick} className={`btn flat ${props.color} `} style={{width:`${props.width}`}}>
        {props.children}
    </button>
    )
} 

export {OutlineButton,RaisedButton,FlatButton,LinkFlatButton,LinkRaisedButton}

