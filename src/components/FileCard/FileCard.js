import styles from './styles.module.css'
import {Link} from "react-router-dom"

function FileCard({ file, index }) {

    let fileName = file.name
    fileName = fileName.split('.')[0]

    return (
        <div className={styles.container}>
            <div>
                <h4>{index + 1}- {fileName}</h4>
            </div>
            <Link to={`/reviewer/detail-paper/${index}`} className={styles.detail}>See Detail</Link>
        </div>
    )
}

export default FileCard