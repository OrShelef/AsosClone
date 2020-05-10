import React from 'react'
import classes from './itemDescription.module.css';

const ItemDescription = ({item}) => {
    return (
        <div className={classes.main}>
            <div className={classes.productDetails}>
                <h2>Product Details</h2>

                <p><a href='#'>{item.itemType}</a>By<a href='#'>{item.brand}</a></p>

                <ul>
                    {item.details && item.details.map(detail=><li>{detail}</li>)}
                </ul>
            </div>

            <div className={classes.section2}>
                <div>
                    <h2>Product code</h2>
                    <p>1254748</p>
                </div>

                <div>
                    <h2>Brand</h2>
                <p>British brand Burton Menswear London combines a long heritage of tailoring with a modern take on relaxed formal and casualwear
                     to bring an added hint of freshness to every occasion.
                      Expect classic shirting and knitwear.
                    <a href='#'>{item.brand}</a>
                    </p>
                </div>

            </div>

            <div className={classes.section3}>
                <div>
                    <h2>Look after me</h2>
                    <p>Wipe clean with a damp cloth or sponge</p>
                </div>
                <div>
                    <h2>About Me</h2>
                    <p>Soft suede upper<br/>
                        Fuzzy, velvety finish
                    </p>
                    <p>
                    Sole: 100% Rubber, Upper: 100% Suede, Inner: 100% Other Materials.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ItemDescription
