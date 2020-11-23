import Head from 'next/head';
import dynamic from 'next/dynamic';

import MainSection from '../sections/home/main';
import BuildSection from '../sections/home/build';
import EarnSection from '../sections/home/earn';
import PartnersSection from '../sections/home/partners';
import { Layout } from '../components';

const PoweredBy = dynamic(() => import('../sections/home/poweredBy'), {
	ssr: false,
});

// trigger deploy 5 Nov 2020

const Home = () => {
	return (
		<>
			<Head>
				<title>Synthetix</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Synthetix is a derivatives liquidity protocol providing the backbone for derivatives trading in DeFi, allowing anyone, anywhere to gain on-chain exposure to a vast range of assets."
				/>
				<meta name="og:image" content="/public/logo-x.png" />
			</Head>
			<Layout>
				<MainSection />
				<BuildSection />
				<EarnSection />
				<PoweredBy />
				<PartnersSection />
			</Layout>
		</>
	);
};

export default Home;
