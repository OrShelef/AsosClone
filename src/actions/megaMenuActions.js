

import {MEGAMENU_GET_SELECTED,MEGAMENU_SET_SELECTED} from '../types';

export const SetSelected=(value)=>{
    return {type:MEGAMENU_SET_SELECTED,payload:value}
}

export const GetSelected=()=>{
    return {type:MEGAMENU_GET_SELECTED}
}