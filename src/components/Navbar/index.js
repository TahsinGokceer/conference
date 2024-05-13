import {useState} from "react"
import styles from "./styles.module.css"
import {Link} from "react-router-dom"

function Navbar({homePath, contactPath}){
    const [isOpen, setIsOpen] = useState(false)   
    
    console.log("Home Path: ", homePath);

    const menu = () => {        
        setIsOpen(!isOpen)        
    }

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <h1>Conference Management</h1>
                    </div>
                    <div>
                       <ul>
                        <li><Link to={homePath}>Home</Link></li>
                        <li><Link to={contactPath}>Contact</Link></li>
                        </ul> 
                    </div>
                    
                </div>
                <div className={styles.right}>
                        <button onClick={menu}>Profilo</button>
                        {
                            isOpen && (
                                <div className={styles.toggle_menu}>
                                    <ul>
                                        <li><a href="#">Profile</a></li>
                                        <li><a href="#">My Papers</a></li>
                                        <li><a href="#">Settings</a></li>
                                        <li><a href="#">Log Out</a></li>
                                    </ul>
                                </div>
                            )
                        }
                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar