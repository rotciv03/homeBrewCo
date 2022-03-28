import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/layout.module.css";
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
