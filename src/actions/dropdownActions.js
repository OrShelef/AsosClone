
import {DROPDOWN_POS,DROPDOWN_TOGGLE,DROPDOWN_SET_IS_OPEN} from '../types';

export const SetPosition=(position)=>{
    return{
        type:DROPDOWN_POS,
        payload:position
    }
}

export const Toggle=()=>{return {type:DROPDOWN_TOGGLE}};

export const SetIsOpen=(value)=>{return {type:DROPDOWN_SET_IS_OPEN,payload:value}};
