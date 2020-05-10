import React,{useEffect, Fragment, useState} from 'react'
import classes from './myAccount.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SetHeaderAndFooter, SetCurrentUser } from '../../actions/mainActions';
import HeaderBackground from '../../Components/Text/text';
import MyOrders from './MyOrders/myOrders';
import MyDetails from './MyDetails/myDetails';
import ChangePassword from './ChangePassword/ChangePassword';
import  {AddressBook, AddAddress } from './AddressBook/AddressBook';
import Axios from 'axios';
import  {PaymentMethods, AddCard } from './Payments/PaymentMethods';
import ContactPrefrences from './ContactPrefrences/ContactPrefrences';
import {Switch, Route,Link, Redirect } from 'react-router-dom';
import SocialAccounts from './SocialAccount/SocialAccounts';
import GiftCardsVouchers from './GiftCardsVouchers/giftCardsVouchers';

const ListItem=(props)=>{
    const route=props.item.name.split(' ').map(s=>s.charAt(0).toUpperCase()+s.substr(1).toLowerCase()).reduce((t,v)=>t+v);
    return(
    <Link to={`/MyAccount/${route}`} onClick={()=>props.setSelected(props.index)} className={`${classes.listItem} ${props.selected==props.index?classes.selected:''}`}>
        <i className={props.item.icon}></i>
        <p>
            {props.item.name}
        </p>
    </Link>)
}

const MyAccount = () =>
 {
    const [selected, setSelected] = useState(0);
    const dispatch=useDispatch();
    const main=useSelector(state=>state.main);   
    const items=[
        {
            name:'Account overview',
            icon:'far fa-user',
            selected:false
        },
        {
            name:'My orders',
            icon:'outline fas fa-box',
            selected:false
        },
        {
            name:'My details',
            icon:'far fa-address-card',
            selected:false
        },
        {
            name:'Change password',
            icon:'outline fas fa-lock',
            selected:false
        },
        {
            name:'Address book',
            icon:'outline fas fa-home',
            selected:false
        },
        {
            name:'Payment methods',
            icon:'outline fas fa-credit-card',
            selected:false
        },
        {
            name:'Contact prefrences',
            icon:'far fa-comment-dots',
            selected:false
        },
        {
            name:'Social accounts',
            icon:'outline fas fa-user-friends',
            selected:false
        },
        {
            name:'Gift cards & vouchers',
            icon:'outline fas fa-gift',
            selected:false
        },
        {
            name:'Need help?',
            icon:'outline fas fa-info-circle',
            selected:false
        },
        {
            name:`Where's my order?`,
            icon:'far fa-clone',
            selected:false
        },
        {
            name:'How do I make a return?',
            icon:'far fa-clone',
            selected:false
        },
        {
            name:'I need a new returns note',
            icon:'far fa-clone',
            selected:false
        },
        {
            name:'Sign out',
            icon:'far fa-arrow-left',
            selected:false
        },
    ]

    useEffect(() => {
       
        Axios.post(`${process.env.REACT_APP_API}/signIn`,{"email":"ori92623@gmail.com","password":"1234"})
        .then(res=>{
            dispatch(SetCurrentUser(res.data.data))

        })
        dispatch(SetHeaderAndFooter(false));
        return () => {
            
        }
    }, []);

    const accountOverview=
    <div className={classes.account_overview}>
    <HeaderBackground className={classes.header} bg="#2d2d2d" color="#fff">
    WELCOME TO
    <br/>
    YOUR ACCOUNT
    </HeaderBackground>
    </div>;
 
  if(!main.currentUser.firstName) return <Fragment/>
    return (
    <div className={classes.container}>

        
        <div className={classes.main}>
            <div>
            <a href='#'>
               <div className={classes.logo}></div>
            </a>
            <h1>my account</h1>
            <a href="#">
                <img src="https://assets.asosservices.com/myaccount/73671f543a0703fc9666ea6d5f20631c.gif"/>
            </a>
            </div>
            <div className={classes.grid}>
                <div className="col">
                     <section className={classes.name_section}>
                        <div className={classes.name_circle}>
                        <p>
                            {main.currentUser.firstName.split('')[0]}
                            {main.currentUser.lastName.split('')[0]}
                            </p> 
                        </div>
                        <div>
                            <p>Hi , </p>
                            <br/>
                            <h1>{main.currentUser.firstName} {main.currentUser.lastName}</h1>    
                        </div>
                     </section>
                     <div style={{background:'#ffebcc'}}>
                      <i className="fas fa-info-circle">
                       
                     </i>
                     <p>   We've stopped sending you emails and texts. Please confirm your preferences.</p>
                     </div>
                     <ul>
                         {items.map((item,index)=><ListItem index={index} setSelected={setSelected} selected={selected} item={item} key={index}/>)}
                     </ul>
                </div>
               
                <Switch>
                    
                    
                   
                    <Route path="/MyAccount/AccountOverview" render={()=>accountOverview}/>
                    <Route path="/MyAccount/MyDetails" render={()=><MyDetails name='My details' icon=' far fa-address-card'/>}/>
                    <Route path="/MyAccount/MyOrders" render={()=><MyOrders name='My orders' icon='outline fas fa-box'/>}/>
                    <Route path="/MyAccount/ChangePassword" render={()=><ChangePassword name='Change password' icon='outline fas fa-lock'/>}/>
                    <Route path="/MyAccount/AddressBook/AddAddress" render={()=><AddAddress/>}/>
                    <Route path="/MyAccount/AddressBook" render={()=><AddressBook name='Address book' icon='outline fas fa-home'/>}/>
                    <Route path="/MyAccount/PaymentMethods/AddCard" render={()=><AddCard/>}/>
                    <Route path="/MyAccount/PaymentMethods" render={()=><PaymentMethods name='Payment methods' icon='outline fas fa-credit-card'/>}/>
                    <Route path="/MyAccount/ContactPrefrences" render={()=><ContactPrefrences name='Contact prefrences' icon='far fa-comment-dots'/> }/>
                    <Route path="/MyAccount/SocialAccounts" render={()=><SocialAccounts name='Social accounts' icon='outline fas fa-user-friends'/> }/>
                    <Route path={`/MyAccount/GiftCards&Vouchers`} render={()=><GiftCardsVouchers name={`Gift cards & vouchers`} icon='outline fas fa-gift'/> }/>
                    <Redirect path="/MyAccount" to="/MyAccount/AccountOverview"/>
                </Switch>
               
              

            </div>
        </div>
    </div>
    )
}

export default MyAccount
