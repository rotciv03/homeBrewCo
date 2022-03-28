import styles from '../styles/cartitem.module.css';
import { useState, useEffect } from 'react';

export default function CartItem(prop) {
  let [subtotal, setSubtotal] = useState(prop.product.price);
  let quantityUpdate = prop.updateQuantity;
  function updateSubtotal(e) {
    let subTotal = parseInt(e.target.value) * prop.product.price;
    setSubtotal(subTotal);
    quantityUpdate(prop, parseInt(e.target.value));
  }

  return (
    <tr>
      <td>
        <div className={styles.productinfo}>
          <img src={prop.product.image} className={styles.img} />
          <div className={styles.info}>
            <p>{prop.product.title}</p>
            <small>Price: ${prop.product.price}</small>
            <br></br>
            <button
              className={styles.remove}
              onClick={() => prop.deleteItem(prop.product.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </td>
      <td>
        <select
          name="quantity"
          id="quantity"
          onChange={(e) => updateSubtotal(e)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </td>
      <td className={styles.alignright}>${subtotal}</td>
    </tr>
  );
}
