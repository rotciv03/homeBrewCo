import styles from '../styles/secondtable.module.css';
import { useState, useEffect } from 'react';
export default function SecondTable(props) {
  const TAX = 0.09;
  props.subTotalFn();
  let subTotal = props.subtotal;

  return (
    <div className={styles.totalprice}>
      <table className={styles.totaltable}>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td className={styles.alignright}>${subTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Taxes</td>
            <td className={styles.alignright}>
              ${(subTotal * TAX).toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td className={styles.alignright}>
              ${(subTotal + subTotal * TAX).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
