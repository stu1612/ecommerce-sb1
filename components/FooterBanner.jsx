// npm
import Link from "next/link";
import Image from "next/image";

// files
import ImageLoader from "../utils/ImageLoader";
import styles from "../styles/Footer.module.css";

export default function FooterBanner({ discountData }) {
  const { discount, largeText1, largeText2, saleTime } = discountData;
  const { smallText, description, title, buttonText, product, featuredImage } =
    discountData;
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__description}>
        <div className={styles.container__left}>
          <p className={styles.text__left}>{discount}</p>
          <h3 className={styles.heading__left}>{largeText1}</h3>
          <h3 className={styles.heading__left}>{largeText2}</h3>
          <p className={styles.text__left}>{saleTime}</p>
        </div>
        <div className={styles.container__right}>
          <p className={styles.text__right}>{smallText}</p>
          <h3 className={styles.heading__right}>{title}</h3>
          <p className={styles.text__right}>{description}</p>
          <Link href={`/product/${product}`}>
            <button type="button" className={styles.footer__button}>
              {buttonText}
            </button>
          </Link>
        </div>
        <Image
          src={featuredImage.url}
          layout="fill"
          objectFit="contain"
          alt={title}
          loader={ImageLoader}
          className="footer-banner-image"
        />
      </div>
    </div>
  );
}
