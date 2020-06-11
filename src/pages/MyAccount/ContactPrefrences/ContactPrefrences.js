
import React,{useState,useEffect} from 'react'
import classes from './ContactPrefrences.module.css';
import MyAccountHeader from '../Header/MyAccountHeader';
import CheckBox from '../../../Components/checkBoxes';
import {useForm} from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import { SetCurrentUser,SetLoading } from '../../../actions/mainActions';
import Loader from '../../../Components/Loader/Loader';
import UserAPI from '../../../Backend/UserAPI';
const ContactPrefrences = (props) => 
{  
    const main=useSelector(state=>state.main);
    const dispatch=useDispatch();
    const {register,handleSubmit,setValue,getValues} =useForm();
    const [selectAll, setSelectAll] = useState(true);
    useEffect(() => 
    {
        setTimeout(() => {
          
            
            dispatch(SetLoading(false));
        }, 500)
        
      
        window.scrollTo(0, 0)
        
        if(main.currentUser.contactPrefrences)
        setValue(Object.keys(main.currentUser.contactPrefrences).map(x=>{
            return {email:x.email,text:x.text}
        }),true);
        
        return () => {
            
        }
    }, [main.currentUser])
    const onSubmit=async (data)=>
    {
        if(!main.currentUser.contactPrefrences) main.currentUser.contactPrefrences={};
                     
            main.currentUser.contactPrefrences=data;
                     
            const response = await  new UserAPI().Update(main.currentUser);

            if(response.data.status=='ok')
            {
               dispatch(SetCurrentUser(response.data.data));
              
            }
        
    }

    const onClick=()=>
    {
        setSelectAll(!selectAll);
        const state=!selectAll;
        let copy={asos_partners:{},discount_sales:{},exclusives:{},new_stuff:{}};
       
        
            copy.asos_partners=
            {
                email:state,
                text:state
            };
            copy.discount_sales=
            {
                email:state,
                text:state
            };
            copy.exclusives=
            {
                email:state,
                text:state
            };
            copy.new_stuff=
            {
                email:state,
                text:state
            };
          
            setValue(Object.keys(copy).map(x=>{
                return {email:x.email,text:x.text}
            }),true);
        
    }
    if(main.isLoading) return <Loader/>

    return(
        
    <div className={`${classes.main} col`}>
        <MyAccountHeader icon={props.icon} header={props.name}/>
        <div className={classes.container}>
            <h1>CONTENT TYPES</h1>
            <div>
                <p>What would you like to hear about? Select your options below and we'll keep you in the loop.</p>
                <button onClick={onClick}>{selectAll?' SELECT ALL':'CLEAR '}</button>
            </div>
        <form >
          <ContentItem
            register={register}
            name="discount_sales"
            header="DISCOUNTS AND SALES"
            subHeader="Be first in line to nab the stuff you love for less."
             image="https://images.asos-media.com/navigation/gdpr_132x170_promos_high_res?wid=226&hei=336&fit=crop"/>
           
            <ContentItem  
            register={register}
            name="new_stuff" 
            header="NEW STUFF"
            subHeader="Fashion drops, news and style advice: hear it first, wear it first." 
            image="https://images.asos-media.com/navigation/gdpr_132x170_new_high_res?wid=226&hei=336&fit=crop"/>
           
            <ContentItem  
            register={register}
            name="exclusives" 
            header="YOUR EXCLUSIVES"
            subHeader="Enjoy a birthday treat, as well as tailored rewards and account updates."
            image="https://images.asos-media.com/navigation/gdpr_132x170_exclusives_high_res?wid=226&hei=336&fit=crop"/>
        
            <ContentItem   
            register={register}
            name="asos_partners"
            header="ASOS PARTNERS"
            subHeader="Stay in the know with exclusive collabs and handpicked offers."
            image="https://images.asos-media.com/navigation/gdpr_132x170_partners_high_res?wid=226&hei=336&fit=crop"/>
        </form>
           
           
        </div>
   <p>Changes to your preferences may take up to seven days to take effect.</p>
   <button onClick={handleSubmit(onSubmit)} type="submit">CONFIRM PREFERENCES</button>
    </div>)
}

const ContentItem=(props)=>
{

    return (
        <div className="col">
            <span className={classes.hr}/>
            <div className={classes.content_item}> 
                <img src={props.image}/>
                <div>
                    <h1>{props.header}</h1>
                    <p>{props.subHeader}</p>
                </div>
                <div>
                <CheckBox register={props.register} className={classes.check_box} name={`${props.name}.email`} text="Email"/>
                <CheckBox register={props.register} className={classes.check_box} name={`${props.name}.text`} text="Text"/>
                </div>
               

            </div>
        </div>
    )
}
export default ContactPrefrences
