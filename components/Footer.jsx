// npm
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

// files
import styles from "../styles/Layout.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>2022 || TechEcomm</p>
      <p className={styles.footer__icons}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
}
