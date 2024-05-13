import FileCard from '../../components/FileCard/FileCard';
import styles from "./styles.module.css"

function NewPaper() {
    const files = localStorage.getItem("All files")
    const filesList = JSON.parse(files)
    console.log(filesList);

    return (
        <div>
            <h2 className={styles.title}>New Papers</h2>

            {
                filesList && filesList.map((item, index) => <FileCard file={item} index={index}/>)
            }
        </div>
    )
}

export default NewPaper