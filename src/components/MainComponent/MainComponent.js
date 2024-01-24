import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({ title, feature1, feature2, feature3, fontFamily }) => {
  return (
    <section className={styles.mainWrapper} style={{ fontFamily: fontFamily }}>
      <div className={styles.wrapper}>
        <div className={[styles.top, styles.circle].join(" ")}>
          <div className={styles.textContainer}>
            <p
              className={styles.textTop}
              dangerouslySetInnerHTML={{ __html: feature1.text }}
            ></p>
            <p
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: title }}
            ></p>
          </div>
        </div>
        <div className={[styles.left, styles.circle].join(" ")}>
          <div className={styles.textContainer}>
            <p
              className={styles.textLeft}
              dangerouslySetInnerHTML={{ __html: feature2.text }}
            ></p>
          </div>
        </div>
        <div className={[styles.right, styles.circle].join(" ")}>
          <div className={styles.textContainer}>
            <p
              className={styles.textRight}
              dangerouslySetInnerHTML={{ __html: feature3.text }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
