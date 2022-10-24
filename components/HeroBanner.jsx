// npm
import Image from "next/image";
import Link from "next/link";

// files
import ImageLoader from "../utils/ImageLoader";
import styles from "../styles/Hero.module.css";

export default function HeroBanner({ bannerData }) {
  // properties
  const { smallText, midText, largeText1, image } = bannerData;
  const { product, buttonText, description } = bannerData;

  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__content}>
        <p className={styles.text__small}>{smallText}</p>
        <h3 className={styles.heading__h3}>{midText}</h3>
        <h1 className={styles.heading__h1}>{largeText1}</h1>
      </div>
      <div className={styles.image__wrapper}>
        <Image
          src={image.url}
          alt={product}
          loader={ImageLoader}
          layout="fill"
          width={500}
          height={500}
          priority
          className={styles.hero__image}
        />
      </div>
      <div className={styles.hero__description}>
        <Link href={`/product/ID`}>
          <button type="button" className={styles.hero__button}>
            {buttonText}
          </button>
        </Link>
        <div>
          <h5 className={styles.notice}>
            What people are saying about this product
          </h5>
          <p className={styles.text}>{description}</p>
        </div>
      </div>
    </div>
  );
}
