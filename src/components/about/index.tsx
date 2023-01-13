import React, {useEffect} from 'react';
import ART_DESIGN from '../../images/art-design.svg';
import DIRECT from '../../images/direct-to-you-arms.png';
import PEOPLE from '../../images/people.png';
import {useAnimation, motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {squareVariantsNegative, squareVariantsPositive} from '../utils';

const About = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<section className='about_container' id='about-caio'>
			<div className='about_container_title'>Sobre CAIO</div>
			<div className='about_container_info'>
				<div className='about_container_list'>
					<motion.div
						className='about_container_list_description'
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={squareVariantsNegative}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
						sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
						est laborum <br />
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
						sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
						est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</motion.div>

					<motion.div
						className='about_container_list_additional'
						ref={ref}
						animate={controls}
						initial='hidden'
						variants={squareVariantsPositive}
					>
						<div className='inicial_aditional_list'>
							<div className='first_item_aditional'>
								<img src={DIRECT} className='image-item-one' />
							</div>
							<div className='second_item_aditional'>
								<img src={ART_DESIGN} className='image-item-two' />
							</div>
						</div>

						<div className='final-aditional_list'>
							<img src={PEOPLE} className='image-item-final' />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
