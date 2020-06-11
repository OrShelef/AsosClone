

import * as types from '../types';


export const SetOverlay=(value)=>
{
    return {type: types.MAIN_SET_OVERLAY,payload:value}
}

export const SetLocation=(value)=>
{
    return {
        type:types.MAIN_SET_LOCATION,payload:value
    }
}

export const SetNavbar=(value)=>
{
    return {
        type:types.MAIN_SET_IS_NAVBAR_OPEN,payload:value
    }
}

export const SetHeaderAndFooter=(value)=>
{
    return {
        type:types.MAIN_SET_SHOW_HEADER_AND_FOOTER,payload:value
    }
}

export const SetCurrentUser = value=> 
{
    return {
        type:types.MAIN_SET_CURRENT_USER,
        payload:value
    }
}

export const SetPopup = value=> 
{
    return {
        type:types.MAIN_SET_POPUP,
        payload:value
    }
}

export const SetToast = value=> 
{
    return {
        type:types.MAIN_SET_TOAST,
        payload:value
    }
}


export const SetLoading = value=> 
{
    return {
        type:types.MAIN_SET_LOADING,
        payload:value
    }
}
export const SetSideBar = value=> 
{
    return {
        type:types.MAIN_SET_SIDE_BAR,
        payload:value
    }
}

export const SetFilterSideBar = value=> 
{
    return {
        type:types.MAIN_SET_FILTER_SIDE_BAR,
        payload:value
    }
}


export const SetDepartment = value=> 
{
    return {
        type:types.MAIN_SET_CURRENT_DEP,
        payload:value
    }
}
