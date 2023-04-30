import {pathOr} from 'ramda';
import React, {useState, useEffect, useMemo} from 'react';
import SHOW_MORE from '../../images/show-more.png';
import SHOW_LESS from '../../images/show-les.svg';
import DEVELOP from '../../images/develop.png';
import TECH from '../../images/tech.png';
import {useAnimation, motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {squareVariantsPositive, services} from '../utils';

const Services = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	const [index, setIndex] = useState<number>(-1);

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<section className='services_container' id='services-caio'>
			<div className='services_container_title'>Nuestros Servicios</div>
			{index != -1 && <div className='overlay_services'></div>}
			<motion.div
				className='services_container_list'
				ref={ref}
				animate={controls}
				initial='hidden'
				variants={squareVariantsPositive}
			>
				<div className='services-list'>
					{services.map((item, i) => {
						const name = pathOr('', ['name'], item);
						const description = pathOr('', ['description'], item);

						if (index === i)
							return (
								<div className='item-service-selected' key={i} onClick={() => setIndex(-1)}>
									<div className='container_service_selected'>
										<div
											className='name_service_selected'
											dangerouslySetInnerHTML={{__html: name}}
										/>
										<img src={SHOW_LESS} className='icon_show_more' />
									</div>
									<div
										className='description_service'
										dangerouslySetInnerHTML={{__html: description}}
									/>
								</div>
							);

						return (
							<div className='item-service' key={i} onClick={() => setIndex(i)}>
								<div className='name_service' dangerouslySetInnerHTML={{__html: name}}></div>
								<img src={SHOW_MORE} className='icon_show_more' />
							</div>
						);
					})}
				</div>
			</motion.div>
			<motion.div
				className='container_images_services'
				ref={ref}
				animate={controls}
				initial='hidden'
				variants={squareVariantsPositive}
			>
			</motion.div>
		</section>
	);
};

export default Services;
