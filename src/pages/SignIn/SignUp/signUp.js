
import React, { useEffect,useState } from 'react';
import classes from './signUp.module.css';
import UserAuthType from '../Components/UserAuthType/userAuthType'
import Seprator from '../Components/Separator/separator'
import SocialMediaButtons from '../Components/SocialMediaButtons/socialMediaButtons';
import { useDispatch } from 'react-redux';
import { SetHeaderAndFooter } from '../../../actions/mainActions';
import RadioButton from '../Components/radiobutton';
import RadioButtonGroup from '../Components/radiobuttonGroup';
import CheckBox from '../../../Components/checkBoxes';
import { useForm } from 'react-hook-form';
import InputForm from '../Components/InputForm/inputForm';
import { useHistory } from 'react-router-dom';
import {SetCurrentUser} from '../../../actions/mainActions';
import UserAPI from '../../../Backend/UserAPI';

const SignUp = props =>
 {
    const dispatch=useDispatch();
    useEffect(() => {
       
        
        dispatch(SetHeaderAndFooter(false));
        return () => {
            
        }
    }, [])
  
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <a href='#'>
                    <div className={classes.logo}></div>
                </a>
            </div>
            <div className={classes.container}>
                <UserAuthType type="signUp"/>
                <h1 id={classes.header}>SIGN UP WITH...</h1>
                <SocialMediaButtons/>
                <p>Signing up with social is super quick. No extra passwords to remember -no brain fail.<br/>
                 Don't worry, we'd never share any of your data or post anything on your behalf #notevil
                </p>
                <Seprator title='SIGN UP USING YOUR EMAIL ADDRESS'/>
                <SignUpForm/>

            </div>
        </div>
    )
}


const SignUpForm = props => 
{
    const dispatch = useDispatch();
    const history=useHistory();
    const { register, handleSubmit, formState } = useForm({mode: 'onChange'});
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
        
        const response = await new UserAPI().SignUp({
            ...data,
            month:+data.month,
            day:+data.day,
            year:+data.year
        });
        
        if(response.data.status=='success')
         {
            dispatch(SetCurrentUser(response.data.data));
            history.push('/man');
         }
       
        
        
      };
    return (
        <div className={classes.mainForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                formcontrol={register}
                required
                type='email'
                name='email' 
                text='Email Address' 
                validation="We'll send your order confirmation here"/>

                <InputForm required formcontrol={register} type='text' name='firstName' text='First Name' />
                <InputForm required formcontrol={register} type='text' name='lastName' text='Last Name' />
                <InputForm required formcontrol={register} type='password' name='password' text='Password' validation='Must be 10 or more characters'/>
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
                <div className={classes.checkboxes}>
                   <h1>CONTACT PREFERENCES</h1>
                    <div onClick={()=>setMode(mode=='none' || mode == 'ALL'?'Clear':'ALL')} className="row space-around">
                        <p>Tell us which emails you’d like:</p>
                        <div>
                        <i className="fas fa-check"></i>
                            {mode=="none"?'ALL':mode}
                        </div>
                    </div>
                    <RadioButtonGroup mode={mode} register={register} type="checkbox" className={classes.checkboxesContainer}>
                        <CheckBox text="Discounts and sales" className={classes.checkbox}/>
                        <CheckBox text="New stuff" className={classes.checkbox}/>
                        <CheckBox text="Your exclusives" className={classes.checkbox}/>

                        <CheckBox text="ASOS partners" className={classes.checkbox}/>
                    </RadioButtonGroup>                   
                </div>
                <a>Tell me more about these...</a>
                <div>
               <p>By creating your account, you agree to our</p>
                <a>Terms and Conditions</a> <p>&</p>    
                <a>    Privacy Policy</a>
                </div>
                <button disabled={!formState.isValid} type='submit'>Join ASOS</button>
            </form>
        </div>
    )
}



export default SignUp;