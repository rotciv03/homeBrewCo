import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { useAddItem, useAddItemUpdate } from '../components/AddItemContext';
import { useUpdateInventory } from '../components/InventoryContext';

const endPoint = 'https://fakestoreapi.com/products';
export const getStaticProps = async () => {
  const resp = await fetch(endPoint);
  const data = await resp.json();
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  let productsArr = data.map((prod) => ({ ...prod, quantity: 1 }));
  let [products, setProducts] = useState([...productsArr]);
  let AddItems = useAddItemUpdate();
  let inventory = useUpdateInventory();

  useEffect(() => {
    AddItems(products);
    inventory([...productsArr]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.herotextcontainers}>
        <h2 className={styles.herotext1}>
          WELCOME TO HOME BEER WINE CHEESEMAKING SHOP
        </h2>
        <h3 className={styles.herotext2}>
          Since 1972 we are one of the most complete and helpful supply{' '}
          <br></br>and service centers in the entire country!
        </h3>
      </div>
    </div>
  );
}
