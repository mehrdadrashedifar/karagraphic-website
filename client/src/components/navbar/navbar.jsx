import styles from './navbar.module.css';
import {Link} from "react-router-dom";

function Navbar(){  

    return(
    <div>

        <ul className={styles.navbar}>
            <li>
                <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
                <Link to="/products">محصولات آماده </Link>
            </li>
            <li>
                <Link to="/information">اطلاعات کاربری</Link>   
            </li>
        </ul>
        {/* <Outlet/> */}
    </div>)
} 

export default Navbar;
