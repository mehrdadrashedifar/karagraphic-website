import styles from './header.module.css';
import Login from '../../modals/login/login';
import Basket from '../../modals/basket/basket';
import Profile from '../../modals/profile/profile';

import { MdLogin , MdManageSearch } from "../../../node_modules/react-icons/md";
import { CgProfile } from "../../../node_modules/react-icons/cg";
import { TbCategoryPlus } from "../../../node_modules/react-icons/tb";
import { SlBasket } from "../../../node_modules/react-icons/sl";

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header(){  

    let isVisible = false;
    const handleClick = () => {
    let elemSearch = document.getElementById('searchBox');
        if (!isVisible){
            elemSearch.style.display='inline';
            isVisible = true
        }else{
            elemSearch.style.display='none';
            isVisible = false
        }
    }
    const [openProfile,setOpenProfile] = useState(false);
    const [openLogin,setOpenLogin] = useState(false);
    const [openBasket,setOpenBasket] = useState(false);


    let isLogedIn = true;

    return(
    <div className={styles.header}>
        <a href='/'>logo
            <img src='/' alt='logoImage'/>
        </a>
        <div id='searchBox' className={styles.searchBox}>
            <input type='search' placeholder='جستجوی محصول...'/>
            <button>جستجو</button>
        </div>
        <ul className={styles.headMenu}>
            {isLogedIn && <li onClick={ () => {setOpenProfile(true)} }><CgProfile/>پروفایل</li>}
            <div>
                {openProfile && 
                    <Profile closeModal={setOpenProfile}/>
                }
            </div>
            <li onClick={ () => {setOpenLogin(true)} }><MdLogin/>ورود/ثبت نام</li>
            <div>
                {openLogin &&
                    <Login closeModal={setOpenLogin}/>
                }
            </div>
            <li onClick={ () => {setOpenBasket(true)} }><SlBasket/>سبد خرید</li>
            <div>
                {openBasket && 
                    <Basket closeModal={setOpenBasket}/>
                }
            </div>
            <li><Link to='/products'><TbCategoryPlus/>دسته بندی ها</Link></li>
            <li onClick={handleClick}><MdManageSearch/>جستجو</li>
        </ul>
    </div>)
} 
export default Header;
