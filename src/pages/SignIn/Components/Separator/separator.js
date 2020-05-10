import React from 'react';
import classes from './separator.module.css'
const Sperator = props => {
    return (
        <div className={classes.seperator}>
            <div>OR</div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Sperator;