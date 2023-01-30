import React, { FC } from "react";
import styles from "./QRsize.module.css";

interface IQRsize {
  size: number;
}

export const QRsize: FC<IQRsize> = ({ size }) => {
  return (
    <div className={styles.qrSize}>
      <p>QR code size</p>
      <p>{size}</p>
      <p>x</p>
      <p>{size}</p>
    </div>
  );
};
