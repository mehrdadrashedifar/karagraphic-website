import styles from './products.module.css';
import ProductItem from '../../components/productItem/productItem';
// import ProductItem2 from '../../components/productItem2/productItem2';
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react';

function Products(){

    const [visibility , setVisibility] = useState(false)

    return(
    <div className={styles.productPartContent}>
        <div className={styles.categoryList}>
            <ul>
                <li onClick={()=> setVisibility((prev) => !prev)}>
                    <p>1دسته بندی</p>
                    <IoIosArrowBack/>
                </li>
                {visibility && <ProductItem test={5} visible={true}/>}


                {/* <ProductItem2/> */}

                <li>
                    <p>2دسته بندی</p>
                    <IoIosArrowBack/>
                </li>
                <li>
                    <p>3دسته بندی</p>
                    <IoIosArrowBack/>
                </li>                
                <li>
                    <p>4دسته بندی</p>
                    <IoIosArrowBack/>
                </li>                
                <li>
                    <p>5دسته بندی</p>
                    <IoIosArrowBack/>
                </li>                
                <li>
                    <p>6دسته بندی</p>
                    <IoIosArrowBack/>
                </li>
            </ul>
        </div>
    </div>
    )
} 
export default Products;