import '../styles/globals.css'

import Layout from '../components/layout.js';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Fakebook</title>
				<meta name="description" content="Fake Facebook, use jsonplaceholder and nextjs. The practice the works of nextjs." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);

}

export default MyApp
