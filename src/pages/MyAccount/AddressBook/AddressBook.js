import {OutlineButton, RaisedButton} from '../../../Components/buttons';
import classes from './AddressBook.module.css';
import React,{useState, useEffect} from 'react';
import MyAccountHeader from '../Header/MyAccountHeader';
import InputForm from '../../SignIn/Components/InputForm/inputForm';
import {useForm} from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import { SetCurrentUser, SetPopup, SetToast } from '../../../actions/mainActions';
import {Countries} from '../../../assets/countries';
import CheckBox from '../../../Components/checkBoxes';
import UserAPI  from '../../../Backend/UserAPI';
import {useHistory} from 'react-router-dom';

const AddressBook = (props) => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const main=useSelector(state=>state.main);
    const dispatch=useDispatch();
   
    const onChecked=(value,index,name)=>
    {
      let user=  JSON.parse(JSON.stringify(main.currentUser));
      user.addresses.forEach(element => {
          element[name]=false;
      });
      user.addresses[index]={...user.addresses[index],[name]:value};
      dispatch(SetCurrentUser(user));
    }
    const DeleteAddress=async (index,toDelete=true)=>
    {
       
        
        if(toDelete)
        {
        
          let copy=JSON.parse(JSON.stringify(main.currentUser));
          copy.addresses.splice(copy.addresses[index],1);
          const response = await new UserAPI().Update(copy);        
          if(response.data.status=='success')
          {
            dispatch(SetCurrentUser(copy));
            OpenToast();
          }
        }
        dispatch(SetPopup({isOpen:false}));
      
    }
    const OpenPopup=(event,index)=>
    {
        if(main.currentUser.addresses[index].defaultDelivery || main.currentUser.addresses[index].defaultBilling)
        {
           return;
        }
        dispatch(SetPopup(
            {
                width:'37rem',
                height:'25rem',
                isOpen:true,content:()=>
                {
                    return (
                    <div className={classes.popup}>
                        <div >
                        <h1>DELETE ADDRESS</h1>
                        <i className="fas fa-times"></i>        
                        </div>
                        <p>
                        Are you sure you want to delete this address?
                        </p>
                        <RaisedButton onClick={()=>DeleteAddress(index)}>DELETE</RaisedButton>
                        <OutlineButton onClick={()=>DeleteAddress(index,false)} color="invert">CANCEL</OutlineButton>
                    </div>)
                }}
            ))
    }

    const OpenToast=()=>{
        dispatch(SetToast(
            {
                    isOpen:true,
                    timeout:2000,
                    text:'Address deleted'
            }));
    }

       return(
       <div className={`${classes.main} col`}>
            <MyAccountHeader icon={props.icon} header={props.name}>
            <OutlineButton Link="/MyAccount/AddressBook/AddAddress" width="65%" color="invert">Add new Address</OutlineButton>
            </MyAccountHeader>
            <ul>
            {main.currentUser.addresses && main.currentUser.addresses.map((item,index)=>{
                return <li className={classes.list_item}>
                        <div className="col">
                            <p>{item.firstName} {item.lastName}</p>
                            <p>{item.address}</p>
                            <p>{item.city}</p>
                            <p>{item.postcode}</p>
                            <p>{item.country}</p>
                            <p>{item.phone}</p>
                            {!item.defaultDelivery ?
                            <CheckBox onChecked={(v)=>onChecked(v,index,'defaultDelivery')} className={classes.check_box} name="defaultDelivery" text="Set as default delivery address"/>
                            :<p style={{padding:'1rem 0',marginTop:'1rem',opacity:.6}}>This is your default delivery address</p>}
                            {!item.defaultBilling ?
                            <CheckBox onChecked={(v)=>onChecked(v,index,'defaultBilling')} className={classes.check_box} name="defaultBilling" text="Set as default billing address"/>
                            :<p style={{padding:'1rem 0',marginTop:'1rem',opacity:.6}}>This is your default billing address</p>}
                        </div>
                        <div className="col">
                            <a onClick={OpenToast} to="/MyAccount">
                                <p>Edit</p>
                                <i className="fas fa-pen"></i>
                            </a>
                            <a  onClick={(e)=>OpenPopup(e,index)} className={item.defaultDelivery || item.defaultBilling ? classes.disabled:""} to="/MyAccount">
                                <p>Delete</p>
                                <i className="fas fa-trash-alt"></i>
                            </a>
                        </div>
                </li>
            })}
            </ul>
       </div>)
    
   
 
}

const AddAddress=(props)=>
{ 
    const main=useSelector(state=>state.main);
    const dispatch=useDispatch();
    const { register, handleSubmit, formState,setValue } = useForm({mode: 'onChange'});
    const [isAdd, setIsAdd] = useState(true);
    const history=useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
        setValue(Object.keys(main.currentUser).map(f=>
           {return {[f]:main.currentUser[f]}}),true)
        return () => {
            
        }
    }, []);
    const onSubmit = async(data) => 
    {   
       
        if(isAdd)
        {
            if(!main.currentUser.addresses) main.currentUser.addresses=[];
            console.log(main.currentUser);
            
            main.currentUser.addresses.push(data);
          
            const response = await new UserAPI().Update(main.currentUser);
           
            if(response.data.status=='success')
            {
               dispatch(SetCurrentUser(response.data.data));
                history.push('/MyAccount/AddressBook');
            }

        
        }
        
    };
        return (
        <div className={classes.mainForm}>
            <h1>ADD NEW ADDRESS</h1>
            <p>Please enter an address you would like to save and deliver your items to.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm required  formcontrol={register} type='text' name='firstName' text='FIRST NAME' />
                <InputForm required  formcontrol={register} type='text' name='lastName' text='LAST NAME' />
                <InputForm required  formcontrol={register} type='text' name='phone' text='MOBILE' />
                <div className={classes.country}>
                    <label htmlFor="country">COUNTRY:</label>
                    <div>
                        <img src="https://assets.asosservices.com/storesa/images/flags/il.png"/>
                    <select ref={register} name="country">
                          {Countries.map((item,index)=><option value={item.name}>{item.name}</option>)}
                    </select>
                    </div>              
                </div>

                <InputForm required  formcontrol={register} type='text' name='address' text='ADDRESS' />
                <InputForm placeholder="Optional"  formcontrol={register} type='text' name='address2'/>
  
                <InputForm required  formcontrol={register} type='text' name='city' text='CITY' />

                <InputForm placeholder="Optional"  formcontrol={register} type='text' name='_country' text='COUNTRY' />

                <InputForm required  formcontrol={register} type='text' name='postcode' text='POSTCODE' />

                <CheckBox register={register} className={classes.check_box} name="defaultDelivery" text="Set as default delivery address"/>
                <CheckBox register={register} className={classes.check_box} name="defaultBilling" text="Set as default billing address"/>
                <button disabled={!formState.isValid} type='submit'>Save Address</button>
            </form>
        </div>)
    
}

export  {AddressBook,AddAddress}
