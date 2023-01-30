import React, { useState, FC } from "react";
import { Input } from "../UI/Input/Input";
import styles from "./Main.module.css";
import QRCode from "react-qr-code";
import { Arrow } from "../../icons/Arrow/Arrow";

const accuracy = ["L", "M", "Q", "H"];

interface IAccuracy {
  quality: string;
  onClick: VoidFunction;
}

export const Accuracy: FC<IAccuracy> = ({ quality, onClick }) => {
  return (
    <p className={styles.main__accuracy} onClick={onClick}>
      {quality}
    </p>
  );
};

export const Main: FC = () => {
  const [url, setUrl] = useState("");
  const [active, setActive] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const [qrAccuracy, setQrAccuracy] = useState("H");
  const [size, setSize] = useState(256);
  return (
    <section className={styles.main}>
      <h1>Enter your e-mail</h1>
      <input
        type="text"
        placeholder="Enter your e-mail"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className={styles.main__input}
      />
      <button onClick={() => setActive(true)}>Generate</button>
      <div className={styles.main__popup}>
        <p>Accuracy of the qr code -</p>
        <div>{qrAccuracy}</div>
        <div
          className={
            popupActive
              ? `${styles.main__arrow} ${styles.main__arrow_active}`
              : styles.main__arrow
          }
          onClick={() => setPopupActive(!popupActive)}
        >
          <Arrow />
        </div>
        {popupActive && (
          <div className={styles.main__list}>
            {accuracy.map((el, index) => {
              return (
                <Accuracy
                  key={index}
                  quality={el}
                  onClick={() => {
                    setQrAccuracy(el);  
                    setPopupActive(false);
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
      {active && (
        <QRCode
          size={size}
          // style={{ height: "100%", maxWidth: "100%", width: "100%" }}
          value={url}
          // viewBox={`0 0 512 512`}
          level={qrAccuracy}
        />
      )}
    </section>
  );
};
