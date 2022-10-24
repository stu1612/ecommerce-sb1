// npm
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

// files
import ImageLoader from "../../utils/ImageLoader";
import styles from "../../styles/Products.module.css";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_URL);

export default function Products({ products }) {
  const product = products && products[0];
  const { image, model, price, title, details } = product;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container__featuredImage}>
          <Image
            src={image.url}
            alt={model}
            width="300"
            height="300"
            className={styles.featuredImage}
          />
        </div>
        <div className={styles.container__smallImages}></div>

        <div className={styles.container__description}>
          <h1 className={styles.heading}>{model}</h1>
          <div className={styles.reviews}>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4 className={styles.heading__thin}>Details: </h4>
          <div
            className={styles.container__detailsText}
            dangerouslySetInnerHTML={{ __html: details }}
          ></div>
          <p className={styles.highlight}>${price}</p>
          <div className={styles.container__qty}>
            <h3 className={styles.heading__thin}>Quantity:</h3>
            <div className={styles.buttons}>
              <button className={styles.btn}>
                <AiOutlineMinus />
              </button>
              <button className={styles.btn}>0</button>
              <button className={styles.btn}>
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.btn__choice}
              onClick={() => onAdd()}
            >
              Add to Cart
            </button>
            <button type="button" className={styles.btn__choice} onClick={null}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className={styles.marquee}>
          <div className="maylike-products-container track">products</div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const query = gql`
    query Categories($slug: String!) {
      category(where: { slug: $slug }) {
        products {
          model
          price
          slug
          title
          details
          image {
            url
          }
        }
      }
    }
  `;

  const data = await client.request(query, { slug });

  return {
    props: { products: data.category.products },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const query = gql`
    query Categories {
      categories {
        slug
      }
    }
  `;

  const data = await client.request(query);
  const paths = data.categories.map((category) => {
    return {
      params: { slug: category.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};
