import React, { useState, FC, useEffect } from "react";
import styles from "./Main.module.css";
import QRCode from "react-qr-code";
import { QRsize } from "../QRsize/QRsize";
import { AccuracyBlock } from "../AccuracyBlock/AccuracyBlock";
import { Input } from "../Input/Input";
import { InputRange } from "../InputRange/InputRange";
import { Button } from "../Button/Button";
import { validateUrl } from "../../utils/regexForLinks";

export const Main: FC = () => {
  const [url, setUrl] = useState("");
  const [active, setActive] = useState(false);
  const [qrAccuracy, setQrAccuracy] = useState("M");
  const [size, setSize] = useState(256);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (url.length > 0) {
      validateUrl(url) ? setError(false) : setError(true);
    }
    if (url.length === 0) {
      setError(true);
    }
  }, [url]);

  return (
    <section className={styles.main}>
      <h1>Enter your link</h1>
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        error={error}
        errorMessage="Incorrect link"
        placeholder="Enter your link"
      />
      <Button error={error} onClick={() => setActive(true)} />
      <AccuracyBlock qrAccuracy={qrAccuracy} setQrAccuracy={setQrAccuracy} />
      <QRsize size={size} />
      <InputRange onChange={(e) => setSize(Number(e.target.value))} />
      {active && <QRCode size={size} value={url} level={qrAccuracy} />}
    </section>
  );
};
