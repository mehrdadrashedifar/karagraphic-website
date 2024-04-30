import styles from './profile.module.css'
import BackDrop from '../BackDrop/backDrop';

function Profile({closeModal}){
    return(
    <BackDrop>
        <div className={styles.profile}>
            <button onClick={ () => {closeModal(false)}}>x</button>
            <p>نام:</p>
            <p>نام خانوادگی:</p>
            <p>تلفن همراه:</p>
            <p>موجودی کیف پول:</p>
            <p></p>

        </div>
    </BackDrop>
    )
}
export default Profile;