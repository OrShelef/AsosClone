
import * as types from '../types';

const dropDownReducer=(state={},action)=>{
    switch(action.type)
    {
        case types.DROPDOWN_POS:
            {
               
                return {...state,pos:action.payload};
            }

        case types.DROPDOWN_TOGGLE:
            {
                return {...state,isOpen:!state.isOpen};
            }
        case types.DROPDOWN_SET_IS_OPEN:
            {
                return {...state,isOpen:action.payload};
            }
        default:return state;
    }
}

export default dropDownReducer;