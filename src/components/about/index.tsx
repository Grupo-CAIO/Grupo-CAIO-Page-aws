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
						<h2>Caio es un grupo de consultoría y desarrollo web enfocado en E-commerce, en la plataforma VTEX</h2><br/>
							Te acompañamos a diseñar un negocio de éxito, a través de la implementación de un ecosistema digital escalable y de alto rendimiento.  
							 <br />
						Ponemos a su disposición nuestro equipo de expertos con más de 10 años de experiencia en comercio digital, evolucionando a la par de las necesidades del entorno.
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
