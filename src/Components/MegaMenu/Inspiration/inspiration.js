
import React from 'react'

import classes from './inspiration.module.css';
import {CardMenuItem} from '../Components/card';

const InspirationMenu=(props)=>{
    return(
        <div className={`${classes.main}`}>
                <CardMenuItem image="https://images.asos-media.com/navigation/insider_mw-nav-1805-4wl?&$n_320w$" caption="ASOS INSIDERS" text="Fashion tips from your favourite Insiders"/>
                <CardMenuItem image="https://images.asos-media.com/navigation/mw_style_feed_1_210619?&$n_320w$" caption="STYLE FEED" text="Style inspiration and grooming advice"/>
                <CardMenuItem image="https://images.asos-media.com/navigation/unisex_fashion_discovery_finalists_4m?&$n_320w$" caption="FASHION DISCOVERY" text="And the next new brand to drop on ASOS is…"/>
        </div>
    )
}

export default InspirationMenu;