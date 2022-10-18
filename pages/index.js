// files
import { HeroBanner, FooterBanner } from "../components";

export default function Home() {
  return (
    <>
      <HeroBanner heroBanner={bannerDataExists} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {/* {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))} */}
      </div>
      <FooterBanner footerBanner={footerBannerExists} />
    </>
  );
}
