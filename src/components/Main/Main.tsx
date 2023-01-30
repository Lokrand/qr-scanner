import React, { useState, FC, useEffect } from "react";
import styles from "./Main.module.css";
import QRCode from "react-qr-code";
import { QRsize } from "../QRsize/QRsize";
import { AccuracyBlock } from "../AccuracyBlock/AccuracyBlock";
import { InputLink } from "../InputLink/InputLink";
import { InputRange } from "../InputRange/InputRange";
import { Button } from "../Button/Button";
import { regex } from "../../utils/regexForLinks";

export const Main: FC = () => {
  const [url, setUrl] = useState("");
  const [active, setActive] = useState(false);
  const [qrAccuracy, setQrAccuracy] = useState("M");
  const [size, setSize] = useState(256);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    regex.test(url)
      ? setError(false)
      : setError(true);
  }, [url]);

  return (
    <section className={styles.main}>
      <h1>Enter your link</h1>
      <InputLink url={url} setUrl={setUrl} error={error} />
      <Button error={error} setActive={setActive} />
      <AccuracyBlock qrAccuracy={qrAccuracy} setQrAccuracy={setQrAccuracy} />
      <QRsize size={size} />
      <InputRange setSize={setSize} />
      {active && <QRCode size={size} value={url} level={qrAccuracy} />}
    </section>
  );
};
