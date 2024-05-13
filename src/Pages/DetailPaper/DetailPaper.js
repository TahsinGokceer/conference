import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'

function DetailPaper() {
	const { index } = useParams()
	const [file, setFile] = useState(null)
	const [feedback, setFeedback] = useState(false)
	const [textareaValue, setTextareaValue] = useState('')

	useEffect(() => {
		const files = localStorage.getItem("All files")
		const filesList = JSON.parse(files)
		setFile(filesList[index])
	}, [])

	useEffect(() => {
		console.log(file);
	}, [file])

	const handleClick = (msg) => {
		alert(msg)
	}

	const handleChange = (e) => {
		e.preventDefault()

		setTextareaValue(e.target.value)
	}


	return (
		<div className={styles.container}>
			{
				file && (
					<div className={styles.content}>
						<h3>{file.name.split('.')[0]}</h3>
						<p>Size: {file.size}B</p>
						<h5>Description:</h5>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis sapiente cupiditate quas dolorum repudiandae dignissimos corrupti praesentium quidem amet dolorem cumque maxime soluta reiciendis voluptas ipsum enim error quo quam, id ea vel illo? Distinctio ut iste blanditiis quas, quod, rerum dolore veritatis aliquam alias consequuntur doloremque ducimus pariatur!</p>
					</div>
				)
			}
			<div className={styles.buttons}>
				<button onClick={() => handleClick("Paper kabul edildi.")}>Accept</button>
				<button onClick={() => handleClick("Paper rededildi.")}>Reject</button>
				<button onClick={() => setFeedback(!feedback)}>Feedback</button>
			</div>
			{
				feedback && (
					<div className={styles.form}>
						<textarea value={textareaValue} onChange={e => handleChange(e)} placeholder='Write your feedback...'/>
						<button onClick={() => {handleClick("Feedback Authora gönderildi"); setTextareaValue('')}}>Send Feedback</button>
					</div>
					
				)
			}
		</div>
	)
}

export default DetailPaper