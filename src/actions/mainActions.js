

import {MAIN_SET_OVERLAY, MAIN_SET_LOCATION} from '../types';
export const SetOverlay=(value)=>{
    return {type: MAIN_SET_OVERLAY,payload:value}
}

export const SetLocation=(value)=>{
    return {
        type:MAIN_SET_LOCATION,payload:value
    }
}