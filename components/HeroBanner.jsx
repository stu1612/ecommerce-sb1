// npm
import Image from "next/image";
import Link from "next/link";

// files
import ImageLoader from "../utils/ImageLoader";

export default function HeroBanner({ bannerData }) {
  // properties
  const {
    smallText,
    midText,
    largeText1,
    image,
    product,
    buttonText,
    description,
  } = bannerData;

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <Image
          src={image.url}
          alt={product}
          loader={ImageLoader}
          layout="fill"
          objectFit="contain"
          priority
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
