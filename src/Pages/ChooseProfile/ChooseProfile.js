import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css"

function ChooseProfile() {
  return (
    <div className={styles.container}>
        <h1>Choose Profile</h1>
        <div className={styles.buttons}>
            <Link to={'/author'} className={styles.btn}>Author</Link>
            <Link to={'/reviewer'} className={styles.btn}>Reviewer</Link>
        </div>
        
    </div>
  )
}

export default ChooseProfile