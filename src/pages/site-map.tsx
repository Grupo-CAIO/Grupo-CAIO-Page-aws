import React from 'react';
import type {HeadFC} from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import StaticPage from '../components/static';
import '../layout/style.scss';
import {motion, useScroll} from 'framer-motion';
import {useWindowDimensions, scale} from '../components/utils';

const SiteMap = () => {
	const isMobile = useWindowDimensions();
	const {scrollYProgress} = useScroll();
	const scaleX = scale(scrollYProgress);

	const content = `<h1 style='font-size:40px; color:#ffffff; padding: 10px 0 20px;line-height:40px;'>Site Map</h1>
	
	<p>Lorem Ipsum is simply dummy text of 
		the printing and typesetting industry. Lorem Ipsum has beenthe industry's standard dummy text ever since the 1500s, 
		when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
		not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
		It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more 
		recently with desktop publishing software like Aldus PageMaker including versions ofLorem Ipsum.
		<br></br>
		<br></br>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industry's 
		standard dummy text ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make 
		a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, 
		remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
		Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions 
		ofLorem Ipsum.
		<br></br><br></br>
		Ipsum is simply dummy text of the printing and typesetting industry. 
		Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
		galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
		the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
		release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
		like Aldus PageMaker including versions of Lorem Ipsum.</p>`;

	return (
		<main className='caio_main_container'>
			<Header isMobile={isMobile} />
			<StaticPage content={content} />
			<motion.div className='progress-bar' style={{scaleX}} />
			<Footer isMobile={isMobile} />
		</main>
	);
};

export default SiteMap;

export const Head: HeadFC = () => <title>Site Map | Partner - VTEX</title>;
