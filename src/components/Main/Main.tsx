import React, { useState, FC, useEffect } from "react";
import styles from "./Main.module.css";
import QRCode from "react-qr-code";
import { QRsize } from "../QRsize/QRsize";
import { AccuracyBlock } from "../AccuracyBlock/AccuracyBlock";
import { Input } from "../Input/Input";
import { InputRange } from "../InputRange/InputRange";
import { Button } from "../Button/Button";
import { validateUrl } from "../../utils/validateUrl";

export const Main: FC = () => {
  const width = window.screen.availWidth;

  const [url, setUrl] = useState("");
  const [active, setActive] = useState(false);
  const [qrAccuracy, setQrAccuracy] = useState("M");
  const [size, setSize] = useState(width < 500 ? 128 : 256);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(validateUrl(url));
  }, [url]);

  return (
    <section className={styles.main}>
      <h1>Enter your link</h1>
      {active ? (
        <Button
          title="New qr-code"
          onClick={() => {
            setActive(false);
          }}
        />
      ) : (
        <>
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            errorMessage="Incorrect link"
            placeholder="Enter your link"
            error={!error}
          />
          <Button
            error={!error}
            title="Generate"
            onClick={() => {
              setActive(true);
              setUrl("");
            }}
          />
        </>
      )}
      <AccuracyBlock qrAccuracy={qrAccuracy} onClick={() => setQrAccuracy} />
      <QRsize size={size} />
      <InputRange
        onChange={(e) => setSize(Number(e.target.value))}
        min={width < 500 ? 128 : 256}
        max={width < 500 ? 256 : 512}
      />
      {active && <QRCode size={size} value={url} level={qrAccuracy} />}
    </section>
  );
};
