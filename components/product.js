import styles from '../styles/product.module.css';
import {
  useInventory,
  useUpdateInventory,
} from '../components/InventoryContext';
import { useAddItem, useAddItemUpdate } from '../components/AddItemContext';
export default function Product({ img, name, description, price }) {
  let addCart = useAddItemUpdate();
  let prod = useAddItem();
  function addToCart() {
    let newId = prod.length + 1;
    addCart([
      ...prod,
      {
        id: newId,
        description: description,
        image: img,
        price: price,
        quantity: 1,
        title: name,
      },
    ]);
  }
  return (
    <div className={styles.card}>
      <img src={img} className={styles.cardImg} />
      <div className={styles.prodInfoContainer}>
        <h4 className={styles.h4}>{name}</h4>
        <button className={styles.btn} onClick={() => addToCart()}>
          add to cart{' '}
        </button>
      </div>
    </div>
  );
}
