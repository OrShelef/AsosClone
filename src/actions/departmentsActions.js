

import * as types from '../types';

export const GetAllAsync= (id)=>{

    return async (dispatch)=>
        {
       
        return await (
        axios
        .get(`${process.env.REACT_APP_API}/Departmen/${params.dep}`,{params:params})
        .then(res=>
        {
        return dispatch(getAll(res));
        }));
       
    }
}