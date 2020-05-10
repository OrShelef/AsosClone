import React from 'react'
import classes from './pills.module.css';
import {Link} from 'react-router-dom';

const Pill = props => <Link className={classes.main}  to={props.target}>{props.text}</Link>

const Pills = props =>{
    return (
        <ul className={classes.list}>
            {props.items.map(item=><li><Pill text={item}/></li>)}
        </ul>
    )
}

export { Pill,Pills};