import {pathOr} from 'ramda';
import React, {useMemo} from 'react';
import firstImage from '../../images/background-1.png';
import secondImage from '../../images/background-2.png';
import {motion} from 'framer-motion';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Banner = (props: any) => {
	const isMobile = useMemo(() => pathOr(false, ['isMobile'], props), [props]);

	if (isMobile)
		return (
			<section className='banner_container' id='banner'>
				<motion.div
					animate={{y: 0}}
					initial={{y: -500}}
					transition={{duration: 1}}
					className='banner_container_title_container'
				>
					<h1 className='banner_container_title_h1'>Somos expertos en comercio digital</h1>
					<h2 className='banner_container_title_h2'>
					Implementamos soluciones robustas, intuitivas, y de alto rendimiento, enfocadas en la optimización y la conversión. 
					</h2>
					<div className='banner_container_title_footer'>
						<div
							className='banner_container_title_footer_button_start'
							onClick={() => scrollTo('#contact-caio')}
						>
							Comenzar
						</div>

						<div
							className='banner_container_title_footer_button_learn_more'
							onClick={() => scrollTo('#about-caio')}
						>
							Aprender más
						</div>
					</div>
				</motion.div>
				<div className='banner_container_image_container'>
					<img src={firstImage} className='banner_container_image banner_container_first' />
					<img src={secondImage} className='banner_container_image banner_container_second' />
				</div>
			</section>
		);

	return (
		<section className='banner_container' id='banner'>
			<motion.div
				className='banner_container_title_container'
				animate={{y: 0}}
				initial={{y: -500}}
				transition={{duration: 1}}
			>
				<h1 className='banner_container_title_h1'>Somos expertos en comercio digital</h1>
				<h2 className='banner_container_title_h2'>
				Implementamos soluciones robustas, intuitivas, y de alto rendimiento, enfocadas en la optimización y la conversión.
				</h2>
				<div className='banner_container_title_footer'>
					<div
						className='banner_container_title_footer_button_start'
						onClick={() => scrollTo('#contact-caio')}
					>
						Comenzar
					</div>
					<div
						className='banner_container_title_footer_button_learn_more'
						onClick={() => scrollTo('#about-caio')}
					>
						Aprender más
					</div>
				</div>
			</motion.div>
			<div className='banner_container_image_container'>
				<img src={firstImage} className='banner_container_image banner_container_first' />
				<img src={secondImage} className='banner_container_image banner_container_second' />
			</div>
		</section>
	);
};

export default Banner;
