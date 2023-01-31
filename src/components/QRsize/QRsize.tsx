import React, { FC } from "react";

interface IQRsize {
  size: number;
}

export const QRsize: FC<IQRsize> = ({ size }) => {
  return (
    <div>QR code size: {size} x {size}</div>
  );
};
