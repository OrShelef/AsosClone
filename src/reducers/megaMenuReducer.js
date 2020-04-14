import * as types from '../types';

const megaMenuReducer=(state={},action)=>{
    switch(action.type)
    {
        case types.MEGAMENU_GET_SELECTED:
            {
               
                return state;
            }

        case types.MEGAMENU_SET_SELECTED:
            {
                return {...state,selected:action.payload};
            }
       
        default:return state;
    }
}

export default megaMenuReducer;