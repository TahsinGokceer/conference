import styles from "./styles.module.css"
import { FaPhone } from "react-icons/fa6";
import {MdEmail} from "react-icons/md"

function Contact(){
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <div className={styles.card}>
                <div className={styles.phone}>
                    <FaPhone className={styles.icon}/>
                    <p>0555 555 55 55</p>
                </div>
                <div className={styles.email}>
                    <MdEmail className={styles.icon}/>
                    <p>example@example.com</p>
                </div>
            </div>

        </div>
    )
}

export default Contact