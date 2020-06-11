
import {OutlineButton, RaisedButton} from '../../../Components/buttons';
import classes from './PaymentMethods.module.css';
import React,{useState, useEffect} from 'react';
import MyAccountHeader from '../Header/MyAccountHeader';
import InputForm from '../../SignIn/Components/InputForm/inputForm';
import {useForm} from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import { SetCurrentUser, SetPopup, SetToast } from '../../../actions/mainActions';
import CheckBox from '../../../Components/checkBoxes';
import { useHistory } from 'react-router-dom';
import {creditCard} from '../../../assets/svg';
import {cards} from '../../../assets/cards';
import UserAPI from '../../../Backend/UserAPI';

const PaymentMethods = (props) => 
{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const main=useSelector(state=>state.main);
    const dispatch=useDispatch();
    const onChecked=(value,index,name)=>
    {
      let user=  JSON.parse(JSON.stringify(main.currentUser));
      user.paymentMethods.forEach(element => {
          element[name]=false;
      });
      user.paymentMethods[index]={...user.paymentMethods[index],[name]:value};
      dispatch(SetCurrentUser(user));
    }

    const DeleteCard=async (index,toDelete=true)=>
    {
       
        
        if(toDelete)
        {
        
          let copy=JSON.parse(JSON.stringify(main.currentUser));
          copy.paymentMethods.splice(copy.paymentMethods[index],1);
         
          const response = await  new UserAPI().Update(copy);          
          if(response.data.status=='ok')
          {
            dispatch(SetCurrentUser(copy));
            OpenToast();
          }
        }
        dispatch(SetPopup({isOpen:false}));
       
    }
    const OpenPopup=(event,index)=>
    {
        if(main.currentUser.paymentMethods[index].defaultMethod )
        {
           return;
        }
        dispatch(SetPopup(
            {
                width:'40rem',
                height:'26rem',
                isOpen:true,content:()=>
                {
                    return (
                    <div className={classes.popup}>
                        <div >
                        <h1>DELETE PAYMENT METHOD</h1>
                        <i className="fas fa-times"></i>        
                        </div>
                        <p>
                        Are you sure you want to delete this payment method?
                        </p>
                        <RaisedButton onClick={()=>DeleteCard(index)}>DELETE</RaisedButton>
                        <OutlineButton onClick={()=>DeleteCard(index,false)} color="invert">CANCEL</OutlineButton>
                    </div>)
                }}
            ))
    }

    const OpenToast=()=>{
        dispatch(SetToast(
            {
                    isOpen:true,
                    timeout:2000,
                    text:'Payment method deleted'
            }));
    }

     return(
        <div className={`${classes.main} col`}>
             <MyAccountHeader icon={props.icon} header={props.name}>
             <OutlineButton Link="/MyAccount/PaymentMethods/AddCard" width="65%" color="invert">ADD NEW PAYMENT METHOD</OutlineButton>
             </MyAccountHeader>
             <ul>
             {main.currentUser.paymentMethods && main.currentUser.paymentMethods.map((item,index)=>{
                 return <li className={classes.list_item}>
                         <div className="col">
                             <div>
                                 <img src="https://assets.asosservices.com/asos-secure/images/cards/mastercard.png"/>
                                 <p>Mastercard ({item.cardNumber.substring(item.cardNumber.split('').length-4,item.cardNumber.split('').length)})
                                 <br/>
                                Exp:  {item.expDate.month}/{item.expDate.year}
                                 <br/>
                                 {item.holder}
                                 </p>
                             </div>
                           
                             {!item.defaultMethod ?
                             <CheckBox onChecked={(v)=>onChecked(v,index,'defaultMethod')} className={classes.check_box} name="defaultMethod" text="Set as default payment method"/>
                             :<p style={{padding:'1rem 0',marginTop:'1rem',opacity:.6}}>This is your default payment method</p>}
                         </div>
                         <div className="col"> 
                             <a  onClick={(e)=>OpenPopup(e,index)} className={item.defaultMethod  ? classes.disabled:""} to="/MyAccount">
                                 <p>Delete</p>
                                 <i className="fas fa-trash-alt"></i>
                             </a>
                         </div>
                 </li>
             })}
             </ul>
        </div>)
     
    
       
    
}

const AddCard=(props)=>
{
    const main=useSelector(state=>state.main);
    const dispatch=useDispatch();
    const history=useHistory();
    const { register, handleSubmit, formState,setValue } = useForm({mode: 'onChange'});
    const months=['Month:','01','02','03','04','05','06','07','08','09','10','11','12'];
    const years=['Year:'];
    for (let index = 2020; index <= 2030; index++) 
    {
        years.push(index);
    }
    useEffect(() =>
     {
      
        window.scrollTo(0, 0);
        setValue(Object.keys(main.currentUser).map(f=>
           {return {[f]:main.currentUser[f]}}),true)
        return () => {
            
        }
    }, []);
    const onSubmit = async(data) => 
    {   
        
            if(!main.currentUser.paymentMethods) main.currentUser.paymentMethods=[];
         
            
            main.currentUser.paymentMethods.push(data);
           
           
            const response = await  new UserAPI().Update(main.currentUser);
          
            
            if(response.data.status=='success')
            {
               dispatch(SetCurrentUser(response.data.data));
               history.push('/MyAccount/PaymentMethods');
            }

        
        
        
    };
        return (
        <div className={classes.mainForm}>
            <h1>ADD CARD</h1>
            <p>Now please enter your card details exactly as they are printed.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm required icon={creditCard} formcontrol={register} type='text' name='cardNumber' text='CARD NUMBER' />
                <div className={classes.country}>
                    <label htmlFor="expDate.month">EXPIRY DATE:</label>
                    <div>
                    <select ref={register({validate:v=>v!=0})} name="expDate.month">
                          {months.map((item,index)=><option key={index} value={index}>{item}</option>)}
                    </select>
                    <select ref={register({validate:v=>v!='Year:'})} name="expDate.year">
                          {years.map((item,index)=><option key={index} value={item}>{item}</option>)}
                    </select>
                    </div>              
                </div>
                <InputForm required  formcontrol={register} type='text' name='holder' text='NAME ON CARD' />
                <p>This will be your default payment method</p>
                <button disabled={!formState.isValid} type='submit'>Save Card</button>
                <span className={classes.hr}/>
                <div>
                    <p>WE ACCEPT:</p>
                    <ul>{cards.map((card,index)=><img src={card} key={index}/>)}</ul>
                </div>
            </form>
        </div>)
    }

export { PaymentMethods,AddCard}
