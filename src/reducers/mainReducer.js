import * as types from '../types';
import React,{ Fragment } from 'react';


const mainReducer=(
    state=
    {
    isOverlayOpen:false,
    location:'',
    isNavbarOpen:false,
    showHeaderAndFooter:true,
    currentUser:{},
    popup:{isOpen:false,width:'50vw',height:'50vh',content:(props)=><Fragment/>},
    toast:{isOpen:false,timeout:2000,text:'',backgroundColor:'#2d2d2d',color:'white',icon:null},
    isLoading:false,
    isSideBarOpen:false
    },action)=>{
  
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
        case types.MAIN_SET_IS_NAVBAR_OPEN:
            {
                       
                return {...state,isNavbarOpen:action.payload};
            }
        case types.MAIN_SET_CURRENT_USER:
            {
                return {...state,currentUser:action.payload}
            }
        case types.MAIN_SET_SHOW_HEADER_AND_FOOTER:{
            return {...state,showHeaderAndFooter:action.payload}
        }   
        case types.MAIN_SET_POPUP:{
            return {...state,popup:action.payload}
        }     
        case types.MAIN_SET_TOAST:{
            return {...state,toast:action.payload}
        }
        case types.MAIN_SET_LOADING:{
            return {...state,isLoading:action.payload}
        } 
        case types.MAIN_SET_SIDE_BAR:
            {
                if(action.payload)
                     document.body.classList.add('disable-scroll');
                else
                     document.body.classList.remove('disable-scroll');
            return {...state,isSideBarOpen:action.payload}
        } 
        default:return state;
    }
}


export default mainReducer;