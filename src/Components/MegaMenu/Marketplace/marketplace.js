
import React from 'react'

import classes from './marketplace.module.css';
import {CardMenuItem} from '../Components/card';

const MarketplaceMenu=(props)=>{
    return(
        <div className={`${classes.main}`}>
                <CardMenuItem image="https://images.asos-media.com/navigation/mw_marketplace_mss_30032020?&$n_320w$" caption="UP TO 50% OFF" text="Thousands of things!"/>
                <CardMenuItem image="https://images.asos-media.com/navigation/market_2?&$n_320w$" caption="EXPLORE ASOS MARKETPLACE" text="Shop from 700+ boutiques"/>
                <CardMenuItem image="https://images.asos-media.com/navigation/market_5?&$n_320w$" caption="SHOP VINTAGE SPORTSWEAR" text="Your fave 90s brands"/>
                <CardMenuItem image="https://images.asos-media.com/navigation/market_1?&$n_320w$" caption="SHOP NINETIES GRUNGE" text="Band tees and vintage denim"/>
        </div>
    )
}

export default MarketplaceMenu;