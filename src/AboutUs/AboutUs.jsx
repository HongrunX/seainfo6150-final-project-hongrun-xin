import React from 'react'
import styles from './AboutUs.module.css'
const AboutUs = (props) => {
    return (
        <div className={styles.All}>
            <span className={styles.word}><h1>Gourmet Reviews</h1><h3>Get what you want！</h3></span>
            <img className={styles.img2} src="/images/AboutUs.jpg" alt="AboutUs" />
        <div className={styles.Rest}>
            <h1>Browse</h1><h3>Gourmet Reviews has hundreds of restaurants to choose from. When you open the app, you can scroll through the feed for inspiration or search for a particular restaurant or cuisine. When you find something you like.</h3>
            <h1>Comment</h1><h3>Do not forget to leave your comments after enjoyment.</h3>
        </div>
        </div>
    )
}

export default AboutUs
