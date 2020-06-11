import React, { useState, useEffect } from 'react'
import classes from './items.module.css'
import { Link ,useRouteMatch} from 'react-router-dom';
import Image from '../../../../Components/Image';

const Item =({product}) =>  {

  const [isFav,setIsFav]=useState(false);
  let { path, url } = useRouteMatch();
  const onFavClick=(e)=>
  {
    e.preventDefault();
    setIsFav(true);
  }
 
  if(!product) return <div></div>

 
  return (  
        <Link to={`${url}/${product.Id}`} className={classes.main}>
            <div className={classes.image}>
               
                <Image src={product.Image}  />
                <i onClick={onFavClick} className={`fas fa-heart ${isFav && classes.fillIcon}`}></i>
                <i  className={`fas fa-heart ${isFav && classes.fillIcon} `}></i>
                <i  className={`fas fa-heart ${isFav && classes.fillIcon} ${classes.heart_bg}`}></i>
            </div>
            <p>{product.Name}</p>
            <h2>{product.Prices.Current.Text}</h2>
        </Link>
  );
};

const Items = props => {

    const styleFounded = `${props.items && props.items.length} styles found`;
   
   return (
     <div className={classes.itemsMain}>
       <p className={classes.styleFound}>{styleFounded}</p>
        <div className={classes.items}>
          {props.items.length>0 && props.items.map(item=><Item key={item.id} product={item} />)}
      </div>
    </div>
   );
}



export default Items;

