import { useRouter } from 'next/router';

import Product from './product';
import styles from '../styles/productLayout.module.css';
import { useInventory } from '../components/InventoryContext';

export default function ProductLayout() {
  let inventory = useInventory();
  const router = useRouter();
  let currentPage = router.pathname.split('/')[1].split('M')[0].toUpperCase();
  let bgImage = {
    BEER:
      'https://www.pexels.com/photo/1267700/download/?search_query=beer%20&tracking_id=uu2qhjtyzah',
    WINE:
      'https://images.pexels.com/photos/1407857/pexels-photo-1407857.jpeg?cs=srgb&dl=pexels-adonyi-g%C3%A1bor-1407857.jpg&fm=jpg',
    KOMBUCHA:
      'https://images.pexels.com/photos/5157568/pexels-photo-5157568.jpeg?cs=srgb&dl=pexels-curtis-loy-5157568.jpg&fm=jpg',
    CHEESE:
      'https://images.pexels.com/photos/1200667/pexels-photo-1200667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    CIDER:
      'https://images.pexels.com/photos/1400255/pexels-photo-1400255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  };
  let url = bgImage[currentPage];

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div
          className={styles.content}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${url})`,
          }}
        >
          <h2 className={styles.h2}>ALL THINGS {currentPage}</h2>
        </div>
        <div className={styles.productContainer}>
          {inventory.map((prod) => {
            return (
              <Product
                img={prod.image}
                name={prod.title}
                description={prod.description}
                price={prod.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
