import Head from 'next/head';
import Layout from '../components/Layout';
import Category from '../components/Category/Category';
import Product from '../components/Product/Product';
import Details from '../components/Details/Details';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Category />
      <Product />
      <Details />
    </Layout>
  );
}
