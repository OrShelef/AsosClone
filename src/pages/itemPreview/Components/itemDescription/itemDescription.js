import React from 'react'
import classes from './itemDescription.module.css';

const ItemDescription = ({item}) => {
    return (
        <div className={classes.main}>
            <div className={classes.productDetails}>
                <h2>{item.Description.Header}</h2>

                <p><a href='#'>{item.ProductType}</a> By <a href='#'>{item.Brand}</a></p>

                <ul>
                    {item.Description.items && item.Description.items.map(detail=><li>{detail}</li>)}
                </ul>
            </div>

            <div className={classes.section2}>
                <div>
                    <h2>Product code</h2>
                    <p>{item.ProductCode}</p>
                </div>

                <div>
                    <h2>Brand</h2>
                <p>
                    
                    {item.BrandDescription}
                    </p>
                </div>

            </div>

            <div className={classes.section3}>
                <div>
                <h2>{item.SizeAndFit.Header}</h2>
                    <p>{item.SizeAndFit.Data}</p>
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
