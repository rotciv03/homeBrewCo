import styles from '../styles/Header.module.css';
import { BsCart4 } from 'react-icons/Bs';
import Link from 'next/link';
import { useAddItem } from '../components/AddItemContext';
export default function Header() {
  let amount = useAddItem();
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>
      <ul className={styles.undordereList}>
        <li className={styles.listItem}>
          <div className={styles.dropdown}>
            SHOP
            <div className={styles.shopDropDown}>
              <Link href="/beerMaking">
                <a>BEER MAKING</a>
              </Link>
              <Link href="/wineMaking">
                <a>WINE MAKING</a>
              </Link>
              <Link href="/cheeseMaking">
                <a>CHEESEMAKING</a>
              </Link>
              <Link href="/kombuchaMaking">
                <a>KOMBUCHA BREWING</a>
              </Link>
              <Link href="/ciderMaking">
                <a>CIDER</a>
              </Link>
            </div>
          </div>
        </li>

        <li className={styles.listItem}>
          <div className={styles.dropdown}>
            INFO
            <div className={styles.shopDropDown}>
              <Link href="/contact">
                <a>CONTACT US</a>
              </Link>
              <Link href="/ourstory">
                <a>OUR STORY</a>
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.listItem}>PICK UP REQUEST</li>
      </ul>
      <Link href="/shopingcart">
        <a className={styles.cart_container}>
          <span
            className={styles.cartBubble}
            data-count={amount ? amount.length : 0}
          >
            <BsCart4 className={styles.cart} />
          </span>
        </a>
      </Link>
    </header>
  );
}
