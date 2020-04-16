import * as types from '../types';


const mainReducer=(state={isOverlayOpen:false,location:''},action)=>{
  
    switch(action.type)
    {
        case types.MAIN_SET_OVERLAY:
            {
               
                return {...state,isOverlayOpen:action.payload};
            }
        case types.MAIN_SET_LOCATION:
            {
                   
                    return {...state,location:action.payload};
            }
                 
        default:return state;
    }
}


export default mainReducer;