// npm
import { gql, GraphQLClient } from "graphql-request";

// files
import { HeroBanner, FooterBanner, Category } from "../components";
import styles from "../styles/Home.module.css";

export default function Home({ banner, categories, discount }) {
  // properties
  const bannerData = banner && banner[0];
  const discountData = discount && discount[0];

  return (
    <>
      <HeroBanner bannerData={bannerData} />
      <div className={styles.cat__heading}>
        <h2 className={styles.cat__title}>Amazing quality products</h2>
        <p className={styles.cat__text}>What are you hunting for?</p>
      </div>
      <div className={styles.categories}>
        {categories &&
          categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
      </div>
      <FooterBanner discountData={discountData} />
    </>
  );
}

export const getServerSideProps = async () => {
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_URL);

  const bannerQuery = gql`
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

  const categoryQuery = gql`
    query Category {
      categories {
        featuredImage {
          url
        }
        id
        slug
        title
        excerpt
      }
    }
  `;

  const discountQuery = gql`
    query Discounts {
      discounts {
        buttonText
        description
        id
        largeText1
        largeText2
        saleTime
        slug
        smallText
        title
        discount
        featuredImage {
          url(
            transformation: {
              image: { resize: { fit: clip, height: 200, width: 200 } }
            }
          )
        }
      }
    }
  `;

  const data = await client.request(bannerQuery);
  const categoryData = await client.request(categoryQuery);
  const discountsData = await client.request(discountQuery);

  return {
    props: {
      banner: data.banners,
      categories: categoryData.categories,
      discount: discountsData.discounts,
    },
  };
};
