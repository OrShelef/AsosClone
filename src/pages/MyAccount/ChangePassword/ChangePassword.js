import React ,{useEffect} from 'react'
import classes from './ChangePassword.module.css';
import MyAccountHeader from '../Header/MyAccountHeader';
import InputForm from '../../SignIn/Components/InputForm/inputForm';
import {useForm} from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import { SetCurrentUser } from '../../../actions/mainActions';

const ChangePassword = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(<div className={`${classes.main} col`}>
        <MyAccountHeader icon={props.icon} header={props.name}>
        <p >Feel free to update your password so your ASOS account stays secure.</p>
        </MyAccountHeader>
    <DetailsForm/>
    </div>)
}
const DetailsForm = props => 
{
    const dispatch = useDispatch();
    const main=useSelector(state=>state.main);   

    const { register, handleSubmit, formState } = useForm({mode: 'onChange'});

    const onSubmit = async(data) => 
    {   
       
        data={...data,_id:main.currentUser._id.$oid};
        const response = await axios.post(`${process.env.REACT_APP_API}/updateDetails`,data);
        if(response.data.status=='ok')
        {
           dispatch(SetCurrentUser(response.data.data));
           
        }
    };
   
 
    
    return (
        <div className={classes.mainForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm required min={10} validate={(v)=>v==main.currentUser.password} formcontrol={register} type='password' name='current' text='CURRENT PASSWORD' />
                <InputForm required min={10}  formcontrol={register} type='password' name='new' text='NEW PASSWORD' validation="Must be 10 or more characters" />
                <button disabled={!formState.isValid} type='submit'>Save Password</button>
            </form>
        </div>
    )
}
export default ChangePassword
