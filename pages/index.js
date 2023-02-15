import Layout from '../components/Layout';
import Category from '../components/Category/Category';
import Product from '../components/Product/Product';
import Details from '../components/Details/Details';
import Banner from '../components/Banner/Banner';
import axios from 'axios';

export default function Home(props) {
  return (
    <Layout>
      <Banner />
      <Category />
      <Product products={props.products} />
      <Details />
    </Layout>
  );
}

export async function getServerSideProps() {
  const {data} = await axios.get(`${process.env.BASE_URL}/api/products`);

  return {
    props: {
      products: data,
    },
  };
}
