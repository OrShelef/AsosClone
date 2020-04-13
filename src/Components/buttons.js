
import React from 'react';
import './buttons.css';

const OutlineButton= props => <button className={`btn btn-outline ${props.color} ${props.className}`}>{props.children}</button>

const RaisedButton= props => <button className={`btn  ${props.color} ${props.className}`}>{props.children}</button>

const FlatButton = props => <button onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={props.onClick} className={`btn flat ${props.color} `} style={{width:`${props.width}`}}>{props.children}</button>


export {OutlineButton,RaisedButton,FlatButton}

