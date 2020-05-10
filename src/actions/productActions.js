
import * as types from '../types';
import axios from 'axios';

export const get=(product)=>{
    return {
        type:types.PRODUCTS_GET,
        product
    }
}

export const getAll=(products)=>{
    return {
        type:types.PRODUCTS_GET_ALL,
        products
    }
}

export const getAllAsync= (params={dep:'Sale',offset:0,limit:72})=>{

    return async (dispatch)=>
        {
       
        return await (
        axios
        .get(`${process.env.REACT_APP_API}/Products/${params.dep}`,{params:params})
        .then(res=>
        {
        return dispatch(getAll(res));
        }));
       
    }
}




export const getByIdAsync= (params={id:0,dep:'Sale',offset:0,limit:72})=>{

    return async (dispatch)=>
        {
       
        
        return await (
        axios
        .get(`${process.env.REACT_APP_API}/Products/${params.dep}/${params.id}`,{params:params})
        .then(res=>
        {
        return dispatch(get(res));
        }));
       
    }
}