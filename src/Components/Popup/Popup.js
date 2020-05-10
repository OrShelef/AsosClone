
import React, { useEffect, Fragment } from 'react'
import classes from './Popup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SetOverlay } from '../../actions/mainActions';

const Popup = (props) => 
{
    const dispatch=useDispatch();
    const main =useSelector(s=>s.main);
    useEffect(() => {
        dispatch(SetOverlay(main.popup.isOpen));
        return () => {
            dispatch(SetOverlay(false));
        }
    }, [main.popup]);

    
    if(!main.popup.isOpen) return <Fragment/>
 
    return (
        <div  className={classes.main} style={{width:main.popup.width,height:main.popup.height}}>
           {main.popup.content()}
        </div>
    )
}

export default Popup
