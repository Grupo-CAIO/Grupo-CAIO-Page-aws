import React, {useEffect, useState} from 'react';
import {HeadFC} from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import NotFound from '../components/notFound';
import {pathOr} from 'ramda';

const NotFoundPage = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		if (window) {
			const innerWidth = pathOr(0, ['innerWidth'], window);
			setIsMobile(innerWidth <= 1025);
		}
	}, []);

	return (
		<main className='caio_main_container'>
			<Header isMobile={isMobile} />
			<NotFound />
			<Footer isMobile={isMobile} />
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not Found</title>;
