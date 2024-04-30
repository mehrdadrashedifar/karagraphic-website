import styles from './productItem2.module.css';
import image from '../../assets/print24-Keyvisual_mobile_030622_FF_m8jkhs.webp'

function ProductItem2(){

    // let elem = document.getElementById('productItemImg')
    // elem.style.backgroundImage=URL({image})
    // console.log(elem)

    let product1 = {
        name : 'تراکت گلاسه 170 گرم 1 لت و 2 لت ',
        id : 1 , 
        cost : '100000',
    }

    return(
    <div className={styles.productItem}>
        <img src={image} alt='productImage'/>
        {/* <div id='productItemImg' className={styles.productItemImg}>tgvt</div> */}
        <h3>{product1.name}</h3>
        {/* <p> {test2}:</p> */}
        {/* <a href='/'>2000عددی</a> */}
        <p>قیمت:{product1.cost}</p>
    </div>)
} 
export default ProductItem2;