import React,{useState, useEffect} from 'react'
import classes from './itemPreview.module.css'
import ImagePreview from './Components/imagePreview/imagePreview';
import BreadCrumbs from '../../Components/BreadCrumbs/breadCrumbs';
import {  useSelector,useDispatch } from 'react-redux';
import ItemDescription from './Components/itemDescription/itemDescription';
import { getByIdAsync } from '../../actions/productActions';


const ItemPreview = (props) => {
   const dispatch=useDispatch();
   const main=useSelector(s=>s.main);
   const sizes=['Please Select','XS','S','M','L','XL','XXL']
   const [isHover, setIsHover] = useState(false);
   const [product, setProduct] = useState(null);

   useEffect(() => {
      
       
       dispatch(getByIdAsync({id:props.match.params.id,dep:main.currentDep.id}))
       .then(res=>{
         
           console.log(res);
           
        setProduct(res.product.data.data)
       });
       return () => {
           
       }
   }, [])
    if(!product) return null
    return (
        <div className={classes.main}>
            <BreadCrumbs/>
            <div className={classes.container}>
            <ImagePreview product={product}/>
            <div className={classes.product_info}>
                <h2>{product.Name}</h2>
                <h1>{product.Prices.Current.Text}</h1>
                <a href='#'>Delivery and returns info</a>
                <p>COLOUR: <span className={classes.color}>{product.Color}</span></p>
                <div className={classes.itemDetails}>
                    <span className={classes.sizes}>
                       <p>SIZE: </p> <span><i className="fas fa-tshirt"></i><a>	Find your Fit Assistant size</a></span>
                    </span>
                    <select >
                        {sizes.map(size=><option key={size}>{size}</option>)}
                    </select>
                    <span className={classes.add_to_bag}>
                        <button>Add To Bag</button>
                        <i onMouseLeave={()=>setIsHover(false)} onMouseEnter={()=>setIsHover(true)} className={`${isHover?'fas':'far'} fa-heart`}></i>
                    </span>

                    <div className={classes.returnsContainer}>
                         We’ve extended returns to 90 days for the time being with a full refund – so you can carry on enjoying ASOS
                    </div>
                    <span className="space"/>
                    <div className={classes.sizing}>
                        <h1>SIZING HELP</h1>
                        <span>
                        <h2>Still unsure what size to get?</h2>
                        <a>
                           Find your recommended size.
                        </a>
                        </span>
                       
                    </div>
                </div>
            </div>
            </div>
            <ItemDescription item={product}/>
        </div>
    )
}

export default ItemPreview;