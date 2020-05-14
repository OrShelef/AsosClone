
import React from 'react'

import classes from './SideBar.module.css';
import { FlatButton } from '../../buttons';
import { useSelector, useDispatch } from 'react-redux';
import { SetOverlay, SetSideBar } from '../../../actions/mainActions';

const SideBar = () => 
{
    const dispatch=useDispatch();
    const main=useSelector(s=>s.main);

    const onExit=()=>{
        dispatch(SetOverlay(false));
        dispatch(SetSideBar(false));
    }
    const man_images=[
        'https://images.asos-media.com/navigation/mw-gl-home-june-refresh-1m?&$n_320w$',
        'https://images.asos-media.com/navigation/mw_seasonal_refresh_new_in_1m_1678000?&$n_320w$',
        'https://images.asos-media.com/navigation/mw_seasonal_refresh_clothing_1m_1701332?&$n_320w$',
        'https://images.asos-media.com/navigation/mw_seasonal_refresh_shoes_1m_1617830?&$n_320w$',
        'https://images.asos-media.com/navigation/mw_seasonal_refresh_accessories_1m_1691397?&$n_320w$',
        'https://images.asos-media.com/navigation/mw_seasonal_refresh_activewear_1m_1649762?&$n_320w$',
        'https://images.asos-media.com/navigation/mw_seasonal_refresh_face_body_1m_1721232?&$n_320w$',
        'https://images.asos-media.com/navigation/mw_seasonal_refresh_brands_1m_1631155?&$n_320w$',
        'https://images.asos-media.com/navigation/mw_seasonal_refresh_outlet_1m_1558799?&$n_320w$',
        'https://images.asos-media.com/navigation/mw_red_april_sale_200320?&$n_320w$',
        'https://images.asos-media.com/navigation/mw_marketplacecontainer?&$n_320w$',
        'https://images.asos-media.com/navigation/mw_top_level_inspiration_1m_1443084?&$n_320w$'
    ]

    const items=[
        {name:'HOME'},
        {name:'NEW IN'},
        {name:'CLOTHING'},
        {name:'SHOES'},
        {name:'ACCESSORIES'},
        {name:'ACTIVEWEAR'},
        {name:'FACE + BODY'},
        {name:'BRANDS'},
        {name:'OUTLET'},
        {name:'SALE UP TO 70% OFF'},
    ]
    return (
        <div className={`${classes.main} ${main.isSideBarOpen?classes.open:''}`}>
            <i onClick={onExit} className="fas fa-times"></i>
            <div>
            <div className={classes.tab_headers}>
                <FlatButton color="invert">Women</FlatButton>
                <FlatButton color="invert">Men</FlatButton>
            </div>
            <div>
                 <ul>
                    {items.map((item,index)=>{
                        return (
                            <li className={classes.list_item}>
                                <h1>{item.name}</h1>
                                <img src={man_images[index]}/>
                            </li>
                        )
                    })}
                 </ul>   
            </div>
             
            </div>
          
        </div>
    )
}

export default SideBar
