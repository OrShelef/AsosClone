

import * as types from '../types';
import axios from 'axios'

export const getAll=(departments)=>{
    return {type:types.DEPARTMENT_GET,departments}
}

export const GetAllAsync= (id)=>{

    return async (dispatch)=>
        {
       
        return await (
        axios
        .get(`${process.env.REACT_APP_API}/Department`)
        .then(res=>
        {
        return dispatch(getAll(res));
        }));
       
    }
}

export const getAllSubMenus=(menus)=>{
    return {type:types.DEPARTMENT_GET_SUB_MENUS,menus}
}

export const GetAllSubMenusAsync= (id)=>{

    return async (dispatch)=>
        {
       
        return await (
        axios
        .get(`${process.env.REACT_APP_API}/SubMenu/${id}`,)
        .then(res=>
        {
        return dispatch(getAllSubMenus(res));
        }));
       
    }
}