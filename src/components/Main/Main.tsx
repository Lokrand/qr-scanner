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
  return <p className={styles.main__accuracy} onClick={onClick}>{quality}</p>;
};

export const Main: FC = () => {
  const [url, setUrl] = useState("");
  const [active, setActive] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const [qrAccuracy, setQrAccuracy] = useState("H");
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
        <div onClick={() => setPopupActive(!popupActive)}>
          <Arrow />
        </div>
        {popupActive && (
          <div className={styles.main__list}>
            {accuracy.map((el) => {
              return (
                <Accuracy quality={el} onClick={() => setQrAccuracy(el)} />
              )
            })}
          </div>
        )}
      </div>
      {active && (
        <QRCode
          size={256}
          style={{ height: "400px", maxWidth: "400px", width: "400px" }}
          value={url}
          viewBox={`0 0 256 256`}
          level={qrAccuracy}
        />
      )}
    </section>
  );
};
