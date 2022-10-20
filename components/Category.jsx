// npm
import Link from "next/link";
import Image from "next/image";

// files
import ImageLoader from "../utils/ImageLoader";
import styles from "../styles/Category.module.css";

export default function Category({ category }) {
  const { featuredImage, title, slug } = category;

  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div className={styles.category}>
          <Image
            src={featuredImage.url}
            alt={title}
            loader={ImageLoader}
            height="250"
            width="250"
            className={styles.category__image}
          />
          <p className={styles.category__text}>{title}</p>
        </div>
      </Link>
    </div>
  );
}
