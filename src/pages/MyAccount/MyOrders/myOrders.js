
import React ,{useEffect} from 'react'
import classes from './myOrders.module.css';
import MyAccountHeader from '../Header/MyAccountHeader';
import {OutlineButton} from '../../../Components/buttons';
import { Link } from 'react-router-dom';

const MyOrders = ({icon,name,orders=[{}]}) => 
{
    useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div className={classes.main}>
            <MyAccountHeader icon={icon} header={name}/>
            <p>Displaying  {orders.length}  order</p>
            <ul>
                {orders.map((order,index)=>{
                    return <li key={index} className={classes.list_item}>
                        <div>    
                           <div>
                               <h2 className={classes.sub_header}>WE'VE SENT IT!</h2>
                               <p>Estimated delivery <br/> 12 Dec, 2019</p>
                            </div> 
                            <div>
                               <h2>ORDER NO.:</h2>
                               <p>456474035</p>
                            </div> 
                            <div>
                               <h2>SHIPPED DATE:</h2>
                               <p>10 Dec, 2019</p>
                            </div>    
                        </div>
                        <span className={classes.hr}/>
                        <div>
                            <div>
                                <Link>
                                    <img src="https://images.asos-media.com/products/image/10931922-1-brightwhite?wid=100"/>
                                </Link>
                                <Link>
                                    <img src="https://images.asos-media.com/products/image/10931922-1-brightwhite?wid=100"/>
                                </Link>
                                <Link>
                                    <img src="https://images.asos-media.com/products/image/10931922-1-brightwhite?wid=100"/>
                                     <p>+5</p>
                                </Link>
                            </div>
                            <div>
                                <OutlineButton color="invert">View order</OutlineButton>
                                <OutlineButton color="invert">Track order</OutlineButton>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            <div>
                 <p>Displaying  {orders.length}  order</p>         
            </div>
        </div>
    )
}

export default MyOrders
