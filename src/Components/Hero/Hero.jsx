import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Faqeed Hassan</h1>
            <p className={styles.description}>
                I'm a Front-End Web Developer with 1 year of experience in React JS.
                Reach out if you'd like to learn more!
            </p>
            <a href="mailto:hassanfaqeed12@gmail.com" className={styles.contactbtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/hero.png")} alt="Hero image of me" className={styles.heroimg} />
           <div className={styles.topBlur}></div>
           <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
