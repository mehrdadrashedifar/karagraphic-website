import styles from './login.module.css';
import BackDrop from '../BackDrop/backDrop';
import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { MdLogin } from "../../../node_modules/react-icons/md";
import { LuEye , LuEyeOff } from "react-icons/lu";
import SignUp from '../signUp/signUp';

function Login({closeModal , phoneNumber , password}){

    const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
    const [isHidden,setIsHidden] = useState(false)

    //login register 
    // const phoneRegExp = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig

    const schema = yup.object().shape({
        phoneNumber : yup.string().matches(phoneNumber, "کاربری با این شماره همراه ثبت نام نشده است").required("پر کردن فیلد اجباری است"),
        password : yup.string().matches(password).required("پر کردن فیلد اجباری است")
    });

    const {register , handleSubmit , formState:{errors}} = useForm({resolver: yupResolver(schema)})

    const onFormSubmit = (data) =>{
        console.log('loged in successfully')
        console.log(data)
        // setData(JSON.stringify(data))
    }   


    return(
    <BackDrop>
        <div className={styles.top}>
            <button onClick={ () => {closeModal(false)}}>x</button>
            <img src='/' alt='logoImage'/>
            <button id='signBtn' onClick={()=> {setIsFirstModalOpen((prev) => !prev);
            document.getElementById('signBtn').style.display='none';}}>ثبت نام</button>
        </div>
        {isFirstModalOpen ? 
        <SignUp/>
        : 
        <form noValidate onSubmit={handleSubmit(onFormSubmit)} className={styles.container}>
            <div>
                <div className={styles.midlle}>
                    <label>شماره همراه</label>
                    <input type='number' {...register('phoneNumber')} />
                    {errors.phoneNumber && <p className={styles.validationP}>{errors.phoneNumber.message}</p>}
                </div>
                <div className={styles.midlle}>
                    <label>گذرواژه</label>
                    <div>
                        <input type={!isHidden ? 'password' : 'text' } {...register('password')}/>
                        <button onClick={()=> setIsHidden((prev) => !prev)}>
                        {isHidden ? <LuEye/> : <LuEyeOff/>}   
                        </button>
                        {errors.password && <p className={styles.validationP}>{errors.password.message}</p>}
                    </div>
                </div>
                <a href='/'>گذرواژه خود را فراموش کرده ام</a>
            </div>
            <input type='submit'/>
        {/* <MdLogin/> */}
        </form>
        }    
    </BackDrop>
    )
}
export default Login;