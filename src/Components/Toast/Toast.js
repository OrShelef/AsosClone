import React, { Fragment } from 'react'
import classes from './Toast.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SetToast } from '../../actions/mainActions';

const Toast = () => 
{
    const dispatch=useDispatch();
    const main=useSelector(s=>s.main);

    if(!main.toast.isOpen) return <Fragment/>
    else
        setTimeout(() => {
            dispatch(SetToast({...main.toast,isOpen:false}));
        }, main.toast.timeout);
        
    return (
        <div className={classes.main} style={{backgroundColor:main.toast.backgroundColor}}>
            {main.toast.icon && <i className={main.toast.icon}></i>}
            <p style={{color:main.toast.color}}>{main.toast.text}</p>
        </div>
    )
}

export default Toast
