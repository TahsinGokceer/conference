import {useEffect, useRef, useState} from "react"
import styles from "./styles.module.css"
import {Link} from "react-router-dom"

function FileUpload(){
    const [files, setFiles] = useState(null)
    const [confirm, setConfirm] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        if(files != null){
            Array.from(files).map(item => {
                const a = item.name.split('.')                

                if(a[a.length - 1] != "pdf"){
                    alert("Yüklediğiniz dosyaların içinde .pdf formatında olmayan dosyalar var. Lütfen sadece .pdf formatında dosyalar yükleyiniz.")
                    window.location.reload(false)
                }
            })
        }
    }, [files])

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setFiles(e.dataTransfer.files)
    }

    const handleConfirm = () => {
        const temp = Array.from(files)       
        const temp2 = {name: temp[0].name, size: temp[0].size}

        // İlk yüklenen dosya için liste oluşturuluyor. Daha sonra yüklenen dosyalar için liste oluşturmaya gerek yok. Zaten bir liste oluşturmuştuk.
        const liste = [temp2]
        const temp3 = JSON.stringify(liste)

        if(localStorage.getItem("All files") != null){
            let fileList = localStorage.getItem("All files")   // const yapınca hata veriyor.
            fileList = JSON.parse(fileList)
            fileList = [...fileList, temp2]
            const newFileList = JSON.stringify(fileList)
            localStorage.setItem("All files", newFileList)
        }else{
            localStorage.setItem("All files", temp3)
        }

        setConfirm(true)
    }

    return(
        <div className={styles.container}>
            {!files && (
                <div>
                    <div className={styles.drag} onDragOver={handleDragOver} onDrop={handleDrop}>
                        <h1>Drag and Drop Files to Upload</h1>
                        <h1>Or</h1>
                        <input type="file" multiple onChange={(e) => setFiles(e.target.files)} hidden ref={inputRef}/>
                        <button onClick={() => inputRef.current.click()}>Select Files</button>
                    </div>
                    
                    <p>* Yalnıca .pdf formatında paperlar kabul edilir</p> 
                </div>
            )}

            {
                files && !confirm && (
                    <div className={styles.files_card}>
                        <h3>Yüklenilen Dosyalar</h3>
                        <ul className={styles.files}>
                            {Array.from(files).map((item, index) => <li className={styles.file} key={index}>{index + 1}- {item.name}  {`(${item.size}B) `}</li>)}
                        </ul>
                        <p className={styles.confirm}>Onaylıyor musunuz?</p>
                        <button className={styles.reload} onClick={() => window.location.reload(false)}>Yeniden Yükle</button>
                        <button onClick={handleConfirm}>Onayla</button>
                    </div>
                )
            }

            {
                confirm && (
                    <div>
                        <h2>Dosyalarınız başarılı bir şekilde yüklendi</h2>
                        <Link to={'/author'} className={styles.confirm}>Ana Sayfaya Dön</Link>
                    </div>
                )
            }
        </div>        
    )
}

export default FileUpload