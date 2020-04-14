

import React from 'react'
import classes from './avatarList.module.css';
import Avatar from './avatar';

const AvatarList=(props)=>
{
    return(
        <ul id={classes.list_avatars} className="col">
            {props.items.map(item=><Avatar isListItem={props.isListItem} key={item.image} className="avatar-horizontal" image={item.image} text={item.text}/>)}
        </ul>
    
)}

export default AvatarList;