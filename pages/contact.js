import styles from "../styles/contact.module.css";
export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>VISIT OUR STORE</h2>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          className={styles.iframe}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13205.019186929636!2d-118.624549!3d34.1654027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc1240b4a2e72488!2sThe%20Home%20Wine%2C%20Beer%20and%20Cheesemaking%20Shop!5e0!3m2!1sen!2sus!4v1644599012633!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.workingHoursContainer}>
        <h3 className={styles.h3}>HOME BEER WINE CHEESEMAKING SHOP</h3>
        <p className={styles.p}>
          22836 Ventura Blvd, Woodland Hills,<br></br> California 91364, United
          States
        </p>
        <p className={styles.p}>
          <a href="tel:8188848586">PHONE: (818) 884-8586</a>
        </p>
        <p className={styles.p}>
          <a href="mailto:homebeerwinecheese@hotmail.com">
            EMAIL: homebeerwinecheese@hotmail.com
          </a>
        </p>
        <table className={styles.table}>
          <tr>
            <th className={styles.th}>Sunday:</th>
            <td className={styles.td}>10:30am-4:30pm</td>
          </tr>
          <tr>
            <th className={styles.th}>Monday:</th>
            <td className={styles.td}>11:00am-07:00pm</td>
          </tr>
          <tr>
            <th className={styles.th}>Tuesday:</th>
            <td className={styles.td}>11:00am-07:00pm</td>
          </tr>

          <tr>
            <th className={styles.th}>Wednesday:</th>
            <td className={styles.td}>11:00am - 07:00pm</td>
          </tr>
          <tr>
            <th className={styles.th}>Thursday:</th>
            <td className={styles.td}>11:00am - 07:00pm</td>
          </tr>
          <tr>
            <th className={styles.th}>Friday:</th>
            <td className={styles.td}>11:00am-07:00pm</td>
          </tr>
          <tr>
            <th className={styles.th}>Saturday:</th>
            <td className={styles.td}>10:30am-04:30pm</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
