import React from 'react'
import styles from "./Home.module.css";
const Home = (props) => {
    console.log(props)
    return (
        <div className={styles.Home}>
            <div className={styles.left}>
                < div className={styles.lefttop}><h1>We Love Delicious Foods!</h1></div>
                <div className={styles.leftbottom}><h2>Fast Delivery  |  Fresh Food  |  24/7 Support</h2></div>
            </div>
            <div className={styles.right}> <img className={styles.img1} src="/images/homepage.jpg" alt="homepage" /></div>
        </div>
    )
}

export default Home
