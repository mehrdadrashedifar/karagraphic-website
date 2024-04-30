import styles from './productItem.module.css';
import image from '../../assets/api.naghshealmas.png'
import { useEffect } from 'react';


function ProductItem({test,visible}){

    // api  

    let product = {
        name : 'تراکت گلاسه 170 گرم 1 لت و 2 لت ',
        id : 1 , 
        cost : '100000',
    }


    useEffect(() =>{   
        if(visible){
            let elem = document.getElementById('item');
            if (elem !== null)elem.style.display='inline';
        }    
    })

    return(
    <div>
        <div id='item' className={styles.productItem}>
            <img src={image} alt='productImage'/>
            {/* <div id='productItemImg' className={styles.productItemImg}>tgvt</div> */}
            <h3>{product.name}</h3>
            <p> {test}:</p>
            {/* <a href='/'>2000عددی</a> */}
            <p>قیمت:{product.cost}</p>
        </div>
    </div>)   
} 
export default ProductItem;