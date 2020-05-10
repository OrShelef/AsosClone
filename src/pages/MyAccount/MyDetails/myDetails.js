import React,{useState, useEffect} from 'react';
import MyAccountHeader from '../Header/MyAccountHeader';
import RadioButton from '../../SignIn/Components/radiobutton';
import RadioButtonGroup from '../../SignIn/Components/radiobuttonGroup';
import classes from './myDetails.module.css';
import InputForm from '../../SignIn/Components/InputForm/inputForm';
import {useForm} from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import { SetCurrentUser, SetToast } from '../../../actions/mainActions';


const MyDetails = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(<div className={`${classes.main} col`}>
        <MyAccountHeader icon={props.icon} header={props.name}>
        <p >Feel free to edit any of your details below so your ASOS account is totally up to date.</p>
        </MyAccountHeader>
    <DetailsForm/>
    </div>)
    
}

const DetailsForm = props => 
{
    const dispatch = useDispatch();
    const main=useSelector(state=>state.main);   

    const { register, handleSubmit, formState,setValue } = useForm({mode: 'onChange'});
    useEffect(() => {
      
 
        setValue(Object.keys(main.currentUser).map(field=>{
            return {[field]:main.currentUser[field]}
        }),true);  
         
        return () => {
            
        }
    }, [])
 
    const  [mode, setMode] = useState('none')
    const Month=['Month','January','February','March','April','May','June','July','August','September','October','November','December']
    const DD=["DD"];
    const Year=['YYYY']
    for (let index = 1; index <= 31; index++) {
        DD.push(index); 
    }
    for (let index = 2004; index>= 1900; index--) {
        Year.push(index);

    }
    const onSubmit = async(data) => 
    {   
    
        const response = await axios.post(`${process.env.REACT_APP_API}/updateDetails`,main.currentUser);
        if(response.data.status=='ok')
        {
           dispatch(SetCurrentUser(response.data.data));
           dispatch(SetToast({
               isOpen:true,
               timeout:3000,
               text:'User Updated',
               backgroundColor:'#6ce6d2',
               color:'#2d2d2d',
               icon:'far fa-check-circle'
           }))
        }
    };
    return (
        <div className={classes.mainForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
              
                <InputForm required formcontrol={register} type='text' name='firstName' text='First Name' />
                <InputForm required formcontrol={register} type='text' name='lastName' text='Last Name' />
                <InputForm
                formcontrol={register}
                required
                type='email'
                name='email' 
                text='Email Address' 
                />
                <label>Data Of Birth:</label>
                <div className={classes.dob}>
                    <select ref={register({validate:v=>v!=0})} name="day">
                          {DD.map((item,index)=><option value={index}>{item}</option>)}
                    </select>
                    <select ref={register({validate:v=>v!=0})} name="month">
                          {Month.map((item,index)=><option value={index}>{item}</option>)}
                    </select>
                    <select ref={register({validate:v=>v!="YYYY"})} name="year">
                          {Year.map(item=><option>{item}</option>)}
                    </select>
                </div>
                <p>You need to be 16 or over to use ASOS</p>
                <label>MOSTLY INTERESTED IN:</label>
                <RadioButtonGroup register={register({required:true})} width="50%">
                    <RadioButton  value="Womenwear" name="gender"/>
                    <RadioButton value="menwear" name="gender"/>
                  
                </RadioButtonGroup>
                
                <button disabled={!formState.isValid} type='submit'>Save changes</button>
            </form>
        </div>
    )
}

export default MyDetails;