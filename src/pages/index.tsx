import React from 'react';
import type {HeadFC} from 'gatsby';
import Header from '../components/header';
import Banner from '../components/banner';
import About from '../components/about';
import Services from '../components/services';
import Contact from '../components/contact';
import Footer from '../components/footer';
import '../layout/style.scss';
import {motion, useScroll} from 'framer-motion';
import {useWindowDimensions, scale} from '../components/utils';

const IndexPage = () => {
	const isMobile = useWindowDimensions();
	const {scrollYProgress} = useScroll();
	const scaleX = scale(scrollYProgress);

	return (
		<main className='caio_main_container'>
			<Header isMobile={isMobile} />
			<Banner isMobile={isMobile} />
			<About />
			<Services />
			<Contact />
			<motion.div className='progress-bar' style={{scaleX}} />
			<Footer isMobile={isMobile} />
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>GRUPO CAIO | Partner - VTEX</title>;
