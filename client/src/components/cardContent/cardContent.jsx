import styles from './cardContent.module.css';
import { FcMoneyTransfer, FcRadarPlot, FcReading } from "react-icons/fc";
import { FcPrint } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { FcSmartphoneTablet } from "react-icons/fc";

function cardContent() {
    return ( 
        <div className={styles.container}>
            <div>
                <p>پشتیبانی سریع</p>
                <FcOnlineSupport size={80}/>
            </div>
            <div>
                <p>سفارش آسان</p>
                <FcSmartphoneTablet size={80}/>
            </div>
            <div>
                <p>قیمت مقرون به صرفه</p>
                <FcMoneyTransfer size={80}/>
            </div>
            <div>
                <p>کیفیت عالی</p>
                <FcPrint size={80}/>
            </div>
            <div>
                <p>ارسال سریع</p>
                <FcShipped size={80}/>
            </div>
        </div>
     );
}

export default cardContent;