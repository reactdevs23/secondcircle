import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({ title, feature1, feature2, feature3, fontFamily }) => {
  const calculateTextWidth = (text, titleLength) => {
    const textSize = text.length;
    const baseSize = 250; // Default size
    // Adjust size based on text length
    return Math.min(baseSize + textSize + textSize * 0.5) >
      Math.min(baseSize + title.length + textSize * 0.5)
      ? Math.min(baseSize + textSize + textSize * 0.5)
      : Math.min(baseSize + title.length + textSize * 0.5);
  };

  const getMinWidth = () => {
    const textElements = [title, feature1.text, feature2.text, feature3.text];
    // You can add more text elements to the array as needed
    const widths = textElements.map((text) => calculateTextWidth(text));

    return Math.max(...widths);
  };

  const minWidth = getMinWidth();
  const aspectRatio = 1.5; // Adjust the aspect ratio as needed

  return (
    <section className={styles.mainWrapper} style={{ fontFamily: fontFamily }}>
      <div className={styles.wrapper}>
        <div
          className={[styles.top, styles.circle].join(" ")}
          style={{
            borderColor: feature1.color,
            minWidth: minWidth * aspectRatio,
            maxWidth: minWidth * aspectRatio,
            height: minWidth * aspectRatio,
          }}
        >
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
        <div
          className={[styles.left, styles.circle].join(" ")}
          style={{
            borderColor: feature2.color,
            minWidth: minWidth * aspectRatio,
            maxWidth: minWidth * aspectRatio,
            height: minWidth * aspectRatio,
          }}
        >
          <div
            className={[styles.textContainer, styles.textContainerLeft].join(
              " "
            )}
          >
            <p
              className={styles.textLeft}
              dangerouslySetInnerHTML={{ __html: feature2.text }}
            ></p>
          </div>
        </div>
        <div
          className={[styles.right, styles.circle].join(" ")}
          style={{
            borderColor: feature3.color,
            minWidth: minWidth * aspectRatio,
            maxWidth: minWidth * aspectRatio,
            height: minWidth * aspectRatio,
          }}
        >
          <div
            className={[styles.textContainer, styles.textContainer].join(" ")}
          >
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
