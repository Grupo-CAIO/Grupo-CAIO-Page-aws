import React from 'react';
import LogoGrande from '../../images/Logo-sin-icono.png';
import {motion} from 'framer-motion';

const Banner = () => {

	return (
		<section className='banner_container' id='banner-home'>
			<motion.div
				className='banner_container_title_container'
				animate={{y: 0}}
				initial={{y: -500}}
				transition={{duration: 1}}
			>
				<img className='banner_container_logo' src={LogoGrande}/>
			</motion.div>
		</section>
	);
};

export default Banner;
