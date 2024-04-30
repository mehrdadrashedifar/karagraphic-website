import styles from './signUp.module.css';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import axios from 'axios';


function SignUp() {

    const schema = yup.object().shape({
        phoneNumber : yup.string().max(11 , "شماره نادرست وارد شده است").min(11 ,"شماره نادرست وارد شده است").required("پر کردن فیلد اجباری است")
        .matches(/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ ,"شماره نادرست وارد شده است"),
        password : yup.string().min(8 ,'کلمه عبور باید حداقل 8 کاراکتر باشد').required(),
        confirmPassword : yup.string().oneOf([yup.ref("password")] , "رمز عبور مطابقت ندارد").required("پر کردن فیلد اجباری است") ,
        username: yup.string().required("پر کردن فیلد اجباری است")
    });

    const {register , handleSubmit , formState:{errors}} = useForm({resolver: yupResolver(schema)})

    const onFormSubmit = (data) =>{
        console.log('submit successfully')
        console.log(data)
    }

  return (
    <form noValidate onSubmit={handleSubmit(onFormSubmit)} className={styles.container}>
        <div>
            <h1>ایجاد حساب کاربری</h1>
            <label>شماره همراه</label>
            <input type='number' {...register('phoneNumber')}/>
            {errors.phoneNumber && <p className={styles.validationP}>{errors.phoneNumber?.message}</p>}
            <div className={styles.midlleSign}>
                <label>نام کاربری</label>
                <input type='text' {...register('username')}/>
                {errors.username && <p className={styles.validationP}>{errors.username?.message}</p>}
                <label>گذرواژه</label>
                <input type='password' {...register('password')}/>
                {errors.password && <p className={styles.validationP}>{errors.password?.message}</p>}
                <label>تکرار گذرواژه</label>
                <input type='password' {...register('confirmPassword')}/>
                {errors.confirmPassword && <p className={styles.validationP}>{errors.confirmPassword?.message}</p>}
            </div>
        </div>  
        <input type='submit'/>
    </form>
  )
}

export default SignUp