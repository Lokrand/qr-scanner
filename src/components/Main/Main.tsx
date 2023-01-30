import React, { useState, FC, useEffect } from "react";
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
  const [qrAccuracy, setQrAccuracy] = useState("M");
  const [size, setSize] = useState(256);
  const [error, setError] = useState(false);

  useEffect(() => {
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(url)
      ? setError(false)
      : setError(true);
    // url.length === 0 && setError(false);
  }, [url]);

  return (
    <section className={styles.main}>
      <h1>Enter your e-mail</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your e-mail"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={styles.main__input}
        />
        {error && <p className={styles.main__error}>Incorrect email</p>}
      </div>
      <button
        className={
          error
            ? `${styles.main__button} ${styles.main__button_disabled}`
            : styles.main__button
        }
        onClick={() => setActive(true)}
        disabled={error && true}
      >
        Generate
      </button>
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
      <div className={styles.main__qrSize}>
        <p>QR code size</p>
        <p>{size}</p>
        <p>x</p>
        <p>{size}</p>
      </div>
      <input
        type="range"
        min={256}
        max={window.screen.availWidth}
        onChange={(e) => setSize(Number(e.target.value))}
      />
      {active && <QRCode size={size} value={url} level={qrAccuracy} />}
    </section>
  );
};
