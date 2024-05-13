import styles from "./styles.module.css"
import { Link } from "react-router-dom"

function Home(){
    return (
        <div className={styles.container}>
            <h1>Welcome <span>Hakan</span></h1>
            <p>Paper yükleyebilirsin ya da yüklediğin paperların durumuna bakabilirsin.</p>
            <Link to={'/author/file-upload'} className={styles.btn}>Upload Paper</Link>
        </div>
    )
}

export default Home