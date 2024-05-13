import styles from "./styles.module.css"
import { Link } from "react-router-dom"

function OrganizerHome() {
	return (
		<div className={styles.container}>
			<h1>Welcome <span>Ahmet</span></h1>
			<p>Yüklenen yeni paperlara bakabilirsin.</p>
			<Link to={'/reviewer/new-papers'} className={styles.btn}>See New Paper</Link>
		</div>
	)
}

export default OrganizerHome