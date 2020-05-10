
import React,{useEffect, useState} from 'react'

import classes from './shopByProduct.module.css';
import BreadCrumbs from '../../../Components/BreadCrumbs/breadCrumbs';
import PageDescription from './Information/description';
import {Pills} from './Pills/pills';
import { Filters } from './Filter/filter';
import Items from './Items/items';
import { useSelector ,useDispatch} from 'react-redux';
import { get, getAll, getAllAsync } from '../../../actions/productActions';
import LoadMore from './LoadMore/loadMore';


const ShopByProduct= (props)=>{
    
    const text=`If you want to look fresh when working out, our edit of sports clothing is your go-to. However you decide to move, we've got the tech that stands up to the most high-impact workouts whilst looking and feeling great. Check out Nike Running when you’re hitting the pavement or the track, with a variety of leggings and thermal base layers to keep you cool when it starts to heat up. Look out for Dri-FIT technology and hi vis detailing for when you need that added layer of precision. Nike Training is sportswear for men who want style and substance. Find joggers, hoodies, and tees that fit right and work as hard as you do. For men’s activewear that covers every workout, our very own ASOS 4505 steps up to the plate every time. Whether you’re running, training in the gym, or hitting the slopes, our collection is fastest off the starting block. From quick dry t-shirts and tights, to ski jackets and track tops, we’ve got your needs covered.
 `
    const pills=['ACCESSORIES','GYM & TRAINING','JACKETS','SHOES','SHORTS','TOPS','TROUSERS & TIGHTS','GOLF','RUNNING','SKI & SNOWBOARD']
 
    const dispatch=useDispatch();
    const [products, setProducts] = useState([])
    const [currentDep, setCurrentDep] = useState('');
    const [totalProducts, setTotalProducts] = useState(0)
    const [page, setPage] = useState(0)
    useEffect(() => {
      
        dispatch(getAllAsync({dep:props.match.params.depName,offset:page})).then(res=>{
        console.log(page);
            
        if(products.length==0)
            {
                 setPage(0);
                setTotalProducts(res.products.data.total);
                setCurrentDep(props.match.params.depName);
                setProducts(res.products.data.products)
                return;
            }
        else if(currentDep == props.match.params.depName)
        {
        const updatedProducts = [...products]
        setProducts([...updatedProducts.concat(res.products.data.products)])
        }
        else
        {
            setPage(0);
            setCurrentDep(props.match.params.depName);
            setProducts(res.products.data.products)
            setTotalProducts(res.products.data.total);

        }
    })
       return () => {
           
       }
   }, [props.match.params.depName,page])
   
   const  nextPageHandler = () => {
     
       
       setPage(page+1);
   }

    return(
        <div >
            <BreadCrumbs/>
            <PageDescription header= {`Men's ${props.match.params.depName}`}  description={text}/>
            <Pills items={pills}/>
            <Filters depName={props.match.params.depName}/>
            <Items items={products}/>
            <LoadMore nextPageClick={nextPageHandler} items={products.length} total={totalProducts}/>
        </div>
    )
}

export  default ShopByProduct;