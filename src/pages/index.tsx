import React, { useEffect, useState } from 'react';
import type {HeadFC} from 'gatsby';
import '../layout/style.scss';
import Banner from '../components/banner';
import Header from '../components/header';
import Slider from '../components/slider';
import Nosotros from '../components/nosotros';
import QueObtenemos from '../components/queobtenemos';
import Contact from '../components/contact';
import Footer from '../components/footer';
import {useWindowDimensions} from '../components/utils';
import Logo from '../images/favicon.png';
import Helmet from 'react-helmet';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => {

	const [scrollPosition, setScrollPosition] = useState(0);
	const isMobile = useWindowDimensions();
	
	useEffect(() => {
		console.log("scrollPosition", scrollPosition)
	}, [scrollPosition])

    const handleScroll = (e:any) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        const position = Math.ceil(
            (scrollTop / (scrollHeight - clientHeight)) * 100
        );
        setScrollPosition(position);
    };
	
	return (
		<main className='caio_main_container'  onScroll={handleScroll}>
			<Helmet>
				<link rel="icon" href={Logo} />
			</Helmet>
			<Header scrollPosition={scrollPosition} isMobile={isMobile}/>
			<Banner/>
			<Slider/>
			<Nosotros/>
			<QueObtenemos/>
			<Contact/>
			<Footer/>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>GRUPO CAIO | Partner - VTEX</title>;
