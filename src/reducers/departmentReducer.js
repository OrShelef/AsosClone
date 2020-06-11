

import * as types from '../types';

const departmentReducer=(state={departments:[],menus:[]},action)=>{

    switch (action.type)  {
        case types.DEPARTMENT_GET:
         {  
            return {...state,departments:action.departments}
         }
         case types.DEPARTMENT_GET_SUB_MENUS:{
             return {...state,menus:action.menus}
         }
        default:
            return state;
    }
}


export default departmentReducer;