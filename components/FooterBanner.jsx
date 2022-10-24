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
          <p className={styles.highlight}>{discount} OFF</p>
          <h3 className={styles.heading}>{largeText1}</h3>
          <h3 className={styles.heading}>{largeText2}</h3>
          <p className={styles.light}>{saleTime}</p>
        </div>
        <div className={styles.container__right}>
          <p className={styles.thin}>{smallText}</p>
          <h3 className={styles.heading}>{title}</h3>
          <p className={styles.light}>{description}</p>
        </div>
        <div className={styles.buttons}>
          <Link href={`/products/${product}`}>
            <button type="button" className={styles.footer__button}>
              {buttonText}
            </button>
          </Link>
        </div>
        <div className={styles.image__wrapper}></div>
        <Image
          src={featuredImage.url}
          layout="fill"
          // objectFit="contain"
          width={200}
          height={200}
          alt={title}
          loader={ImageLoader}
          className={styles.footer__image}
        />
      </div>
    </div>
  );
}
