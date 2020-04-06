import React from 'react'
import styles from './AboutUs.module.css'
const AboutUs = (props) => {
    return (
        <div className={styles.All}>
            The AboutUS page!
            {/* <article>
            <h1>{props.content.title}</h1>
            <address>Author: {props.content.author}</address>
            <p>{props.content.text}</p>
            </article> */}
            <p className={styles.word}><h1>How Food Express works</h1><h3>Food Express is the easy way to get the food you love delivered.</h3></p>
            <img className={styles.img2} src="/images/AboutUs.jpg" alt="AboutUs" />
        <div className={styles.Rest}>
            <p className={styles.word1}><h1>Browse</h1><h3>Food Express has hundreds of restaurants to choose from. When you open the app, you can scroll through the feed for inspiration or search for a particular restaurant or cuisine. When you find something you like, tap to add it to your cart.</h3></p>
            <p className={styles.word2}><h1>Order</h1><h3>When you’re ready to check out, you’ll see your address, an estimated delivery time, and the price of the order including tax and delivery fee. When everything looks right, just tap Place order–and that’s it. We’ll automatically use the card on file so you never need cash.</h3></p>
            <p className={styles.word3}><h1>track</h1><h3>Follow your order in the app. First you’ll see the restaurant accept and start prepping. Then, when the order’s almost ready, a nearby Uber partner–in a car, on a bike, or scooter–will go to the restaurant to pick it up. Next, they’ll drive or ride to you. You’ll be able to see their name and photo and track progress on the map.</h3></p>
        </div>
        </div>
    )
}

export default AboutUs
