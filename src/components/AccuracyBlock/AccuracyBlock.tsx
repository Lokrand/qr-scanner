import React, { useState, FC, Dispatch, SetStateAction } from 'react';
import styles from "./AccuracyBlock.module.css";
import { Arrow } from '../../icons/Arrow/Arrow';
import { Accuracy } from './Accuracy/Accuracy';

const accuracy = ["L", "M", "Q", "H"];

interface IAccuracyBlock {
  qrAccuracy: string;
  setQrAccuracy: Dispatch<SetStateAction<string>>;
}

export const AccuracyBlock: FC<IAccuracyBlock> = ({ qrAccuracy, setQrAccuracy }) => {
  const [popupActive, setPopupActive] = useState(false);
  return (
    <div className={styles.accuracyBlock}>
        <p>Accuracy of the qr code -</p>
        <div>{qrAccuracy}</div>
        <div
          className={
            popupActive
              ? `${styles.accuracyBlock__arrow} ${styles.accuracyBlock__arrow_active}`
              : styles.accuracyBlock__arrow
          }
          onClick={() => setPopupActive(!popupActive)}
        >
          <Arrow />
        </div>
        {popupActive && (
          <div className={styles.accuracyBlock__list}>
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
  )
}
