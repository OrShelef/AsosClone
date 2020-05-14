
import * as types from '../types';

const filtersReducer=(state={comboBoxes:[]},action)=>
{
    switch (action.type) {
        case types.FILTERS_SET:
        {
            if(!action.payload){
                return {comboBoxes:[]};
            }
            const comboboxes = [...state.comboBoxes];
            const isExist = comboboxes.findIndex(combo=>combo.name===action.payload.name);
            if(isExist!=-1)
            {
                comboboxes.splice(isExist,1);
            }
            comboboxes.push(action.payload)
           
            
            return {comboBoxes:[...comboboxes]};
        }
    
        default:
            return state;
    }
}


export default filtersReducer;