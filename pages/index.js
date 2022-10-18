// npm
import { gql, GraphQLClient } from "graphql-request";

// files
import { HeroBanner, FooterBanner, Product } from "../components";

export default function Home({ banner }) {
  const bannerData = banner && banner[0];
  return (
    <>
      <HeroBanner bannerData={bannerData} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {/* {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))} */}
      </div>
      <FooterBanner />
    </>
  );
}

export const getServerSideProps = async () => {
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_URL);

  const query = gql`
    query Banner {
      banners {
        image {
          url
        }
        buttonText
        product
        description
        smallText
        midText
        largeText1
        largeText2
        discount
        saleTime
      }
    }
  `;

  const data = await client.request(query);

  return {
    props: {
      banner: data.banners,
    },
  };
};
