import React,{useEffect} from 'react'
import Navbar from '../../Components/Navbar/navbar';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom';
import LandingPage from '../landingPage/landingPage';
import classes from './home.module.css';
import {useSelector,useDispatch} from 'react-redux';
import Man from '../Man/man';
import { SetLocation } from '../../actions/mainActions';



const Home=(props)=> 
{
    
    useEffect(() => {
      let  unlisten = props.history.listen((location, action) => 
      {
          dispatch(SetLocation(location.pathname));
          console.log(location.pathname);
          
      });
       
      
        // returned function will be called on component unmount 
        return () => {
            unlisten();
        }
      }, []);
    const main=useSelector(state=>state.main);
    const dispatch=useDispatch();
    const check=()=>{
        console.log("dd");
        
    }
        return (
                   
            <div >  
                <Navbar/>
                <div>
                    <span   className={main.isOverlayOpen? classes.main:''}/>
                <Switch>               
                    <Route path="/Home">
                        <LandingPage/>
                    </Route>

                    <Route path="/man">              
                        <Man/>
                    </Route>
                <Redirect from="" to="Home" />
                </Switch>
                </div>
                
                </div>
            
        )
    
}

export default withRouter(Home);