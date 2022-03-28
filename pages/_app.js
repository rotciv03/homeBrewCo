import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

import { AddItemProvider } from '../components/AddItemContext';
import { InventoryProvider } from '../components/InventoryContext';
function MyApp({ Component, pageProps }) {
  return (
    <InventoryProvider>
      <AddItemProvider>
        <Layout>
          <Head>
            <title>HomeBrewCo</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </AddItemProvider>
    </InventoryProvider>
  );
}

export default MyApp;
