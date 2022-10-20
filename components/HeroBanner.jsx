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
      <p className={styles.text__small}>{smallText}</p>
      <h3 className={styles.heading__h3}>{midText}</h3>
      <h1 className={styles.heading__h1}>{largeText1}</h1>
      <Image
        src={image.url}
        alt={product}
        loader={ImageLoader}
        layout="fill"
        objectFit="contain"
        priority
        className={styles.hero__image}
      />
      <div>
        <Link href={`/product/ID`}>
          <button type="button" className={styles.hero__button}>
            {buttonText}
          </button>
        </Link>
        <div className={styles.hero__description}>
          <h5 className={styles.description__heading}>
            What people are saying about this product
          </h5>
          <p className={styles.description__text}>`{description}`</p>
        </div>
      </div>
    </div>
  );
}
