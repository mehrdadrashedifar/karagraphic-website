import styles from './basket.module.css'
import BackDrop from '../BackDrop/backDrop';

function Basket({closeModal}){
    return(
        <BackDrop>
        <div className={styles.basket}>
            <button onClick={ () => {closeModal(false)}}>x</button>
            <p>سبد خرید</p>
        </div>
    </BackDrop>
    )
}
export default Basket;