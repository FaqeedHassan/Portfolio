import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img src={getImageUrl("/images/about/aboutImage.png")} alt="My image sitting with laptop" className={styles.aboutImage} />
        <ul className={styles.aboutItems}> 
            <li className={styles.aboutItem}>
                <img src={getImageUrl("/images/about/cursorIcon.png")} alt="Cursor Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I'm a frontend developer with experience in 
                        building responsive and optimized sites
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("/images/about/serverIcon.png")} alt="Server Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                        I have a knowledge of developing fast and 
                        optimized API's
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("/images/about/storeIcon.png")} alt="Store Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Shopify Store</h3>
                    <p>
                        I have a experience of creating stores 
                        on Shopify
                    </p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About
