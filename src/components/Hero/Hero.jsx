import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shravya</h1>
        <p className={styles.description}>
          I'm a passionate and dedicated Java full-stack developer.
         I aim to leverage my skills and experiences to contribute to innovative projects and collaborate with like-minded professionals.
          
        </p>
        <a href="mailto:shravya.kulal90@gmail.com" className={styles.contactBtn}>
        <button>
  <a>Contact Me</a>
</button>
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};