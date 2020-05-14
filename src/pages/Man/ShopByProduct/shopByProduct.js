
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