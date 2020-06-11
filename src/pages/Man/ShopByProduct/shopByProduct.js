
import React,{useEffect, useState} from 'react'
import BreadCrumbs from '../../../Components/BreadCrumbs/breadCrumbs';
import PageDescription from './Information/description';
import {Pills} from './Pills/pills';
import { Filters } from './Filter/filter';
import Items from './Items/items';
import {useDispatch, useSelector} from 'react-redux';
import {  GetAllAsync, GetAllSubMenusAsync } from '../../../actions/departmentsActions';
import LoadMore from './LoadMore/loadMore';
import { SetDepartment } from '../../../actions/mainActions';
import { getAllAsync } from '../../../actions/productActions';


const ShopByProduct= (props)=>{
    
    
    const dispatch=useDispatch();
    const currentDep=useSelector(s=>s.main).currentDep;
    const [products, setProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [page, setPage] = useState(0)
    const [subMenu, setSubMenu] = useState(null);
  
    useEffect(() => {
      
        try{
        dispatch(GetAllAsync()).then(res=>{
        const departments=res.departments.data.data;
        const dep=   departments.filter(dep=>dep.Name==props.match.params.depName)[0];
         console.log(props.match.params.menu);
         dispatch(SetDepartment(dep));
        
        dispatch(GetAllSubMenusAsync(dep.id)).then(menus=>
            {
                console.log(dep.Menus.filter(m=>m.Name.toLowerCase()==props.match.params.menu.toLowerCase())[0]);
                
        const menuId=dep.Menus.filter(m=>m.Name.toLowerCase()==props.match.params.menu.toLowerCase())[0];
        if(!menuId) return;
        setSubMenu(menus.menus.data.filter(menu=>menuId._id==menu.menuId)[0]);

        console.log(menus.menus.data.filter(menu=>menuId._id==menu.menuId)[0]);
        
        dispatch(getAllAsync({dep:dep.id})).then(prod=>{ 
        setProducts(prevState=>prod.products.data.data);
            console.log(prod.products.data.data);
            
        })

        },err=>console.log(err));
        
    
        /*
        if(products.length==0)
            {
                setPage(0);
                setTotalProducts(res.products.data.total);
                dispatch(SetDepartment(dep));
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
            dispatch(SetDepartment(dep));
            setProducts(res.products.data.products)
            setTotalProducts(res.products.data.total);

        }*/
    });
    }catch{

    }
       return () => {
           
       }
   }, [props.match.params.menu])
   
   const  nextPageHandler = () => {
     
       
       setPage(page+1);
   }
    if(!subMenu) return <div>Loading</div>
  
  
   
    return(
        <div >
            <BreadCrumbs/>
            <PageDescription header= {subMenu.Header}  description={subMenu.Description}/>
            <Pills items={subMenu.pills}/>
            <Filters filters={subMenu.Filters}/>
            <Items items={products}/>
            <LoadMore nextPageClick={nextPageHandler} items={products.length} total={totalProducts}/>
        </div>
    )
}

export  default ShopByProduct;