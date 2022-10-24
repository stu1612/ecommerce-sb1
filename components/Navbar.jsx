// npm
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

// files
import styles from "../styles/Layout.module.css";
import { Cart } from "./";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <p className={styles.navbar__logo}>
        <Link href="/">Tech Ecomm</Link>
      </p>
      <button type="button" className={styles.cart} onClick={null}>
        <AiOutlineShopping />
        <span className={styles.cart__qty}>0</span>
      </button>
      <Cart />
    </nav>
  );
}
