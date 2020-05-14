import React,{useEffect} from 'react'
import Navbar from '../../Components/Navbar/navbar';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom';
import LandingPage from '../landingPage/landingPage';
import classes from './home.module.css';
import {useSelector,useDispatch} from 'react-redux';
import Man from '../Man/man';
import { SetLocation, SetNavbar, SetHeaderAndFooter, SetLoading, SetOverlay, SetSideBar, SetFilterSideBar } from '../../actions/mainActions';
import Footer from '../../Components/Footer/footer'
import ShopByProduct from '../Man/ShopByProduct/shopByProduct';
import ItemPreview from '../itemPreview/itemPreview';
import SignIn from '../SignIn/signIn';
import SignUp from '../SignIn/SignUp/signUp';
import MyAccount from '../MyAccount/myAccount';
import Popup from '../../Components/Popup/Popup';
import Toast from '../../Components/Toast/Toast';
import SideBar from '../../Components/Mobile/SideBar/SideBar';
import { SetIsOpen } from '../../actions/dropdownActions';
import FilterSideBar from '../../Components/Mobile/FilterSideBar/filterSideBar';


const Home=(props)=> 
{
    
    useEffect(() => {
      let  unlisten = props.history.listen((location, action) => 
      {
          dispatch(SetLoading(true));
          dispatch(SetHeaderAndFooter(location.pathname.includes('man')))
          dispatch(SetNavbar(location.pathname.includes('man')));
          const title=location.pathname.substr(location.pathname.lastIndexOf('/')+1);
          if(isNaN(title))
             document.title=title+" | ASOS";
          
      });
       
      
        // returned function will be called on component unmount 
        return () => {
            unlisten();
        }
      }, []);
    const main=useSelector(state=>state.main);
    const dispatch=useDispatch();
    const onOverlayClick=()=>{
        dispatch(SetOverlay(false));
        dispatch(SetSideBar(false));
        dispatch(SetFilterSideBar(false));
        dispatch(SetIsOpen(false));
    }
    const check=()=>{
        console.log("dd");
        
    }
        return (
                   
            <div className="col">  
                <Navbar/>
                <div >
                    
                    <span  onClick={onOverlayClick} className={main.isOverlayOpen? classes.main:''}/>
                    <Popup/>
                    <Toast/>
                   <SideBar/>
                   <FilterSideBar/>
                <Switch>               
                    <Route path="/Home">
                        <LandingPage/>
                    </Route>

                    <Route  path="/man/shopByProduct/:depName/:id" render={props=><ItemPreview {...props}/>}/>              

                    <Route  path="/man/shopByProduct/:depName" render={props=><ShopByProduct {...props}/>}/>              
      
                    <Route path="/man">              
                        <Man/>
                       
                    </Route>
                   <Route path="/SignIn" component={SignIn}/>
                   <Route path="/SignUp" component={SignUp}/>
                   <Route path="/MyAccount" component={MyAccount}/>
                   
                <Redirect from="/" to="Home" />
                </Switch>
                 {main.showHeaderAndFooter? <Footer/>:null}
                  
                </div>
              
            </div>
            
        )
    
}

export default withRouter(Home);