import { useState } from 'react';

import CartItem from '../components/CartItem';
import styles from '../styles/shopingcart.module.css';
import SecondTable from '../components/SecondTable';
import { useAddItem, useAddItemUpdate } from '../components/AddItemContext';

export default function shoppingCart() {
  let [subtotal, setSubTotal] = useState(0);
  let cartItems = useAddItem();
  let updateCart = useAddItemUpdate();

  function updateQuantity(prod, quant) {
    updateCart((prev) => {
      return prev.map((el) => {
        if (el.id === prod.product.id) {
          return { ...prod.product, quantity: quant };
        } else return el;
      });
    });
  }

  function cartSubTotal() {
    setSubTotal(() => {
      return cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    });
  }
  function deleteItem(id) {
    updateCart((prev) => prev.filter((el) => el.id != id));
  }
  let info = cartItems.map((product) => {
    const { id, title, price, quantity, description, image } = product;

    return (
      <CartItem
        key={id}
        product={product}
        updateQuantity={updateQuantity}
        deleteItem={deleteItem}
      />
    );
  });

  return (
    <>
      {cartItems.length === 0 ? (
        <h2> cart is empty</h2>
      ) : (
        <div className={styles.cartcontainer}>
          <table className={styles.tableitems}>
            <tbody>
              <tr>
                <th className={styles.th}>PRODUCT</th>
                <th className={styles.th}>QUANTITY</th>
                <th className={styles.th}>SUBTOTAL</th>
              </tr>
              {info}
            </tbody>
          </table>

          <SecondTable subTotalFn={cartSubTotal} subtotal={subtotal} />
        </div>
      )}
    </>
  );
}
