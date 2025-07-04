import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"/images/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:hassanfaqeed12@gmail.com">hassanfaqeed12@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"/images/contact/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/faqeed-hassan-61004a25a">linkedin.com/faqeed-hassan</a>
        </li>
        <li className={styles.link}>
          <img src={"/images/contact/githubIcon.png"} alt="Github icon" />
          <a href="https://www.github.com/FaqeedHassan">github.com/FaqeedHassan</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact