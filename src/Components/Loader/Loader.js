
import React from 'react'
import classes from './Loader.module.css';
import loader from '../../assets/asos-load.png';
const Loader = () => {
    return (
        <div className={classes.main}>
            <img src={loader}/>
            <span/> 
        </div>
    )
}

export default Loader
