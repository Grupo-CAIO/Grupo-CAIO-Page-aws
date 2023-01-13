import React, {useEffect} from 'react';
import MEMBER from '../../images/team.png';
import {useAnimation, motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {squareVariantsNegative} from '../utils';

const Team = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);
	return (
		<section className='team_container' id='team-caio'>
			<div className='team_container_title'>Nuestro Equipo</div>
			<motion.div
				className='list_member'
				ref={ref}
				animate={controls}
				initial='hidden'
				variants={squareVariantsNegative}
			>
				<div className='team_container_list'>
					<div className='item_member'>
						<img src={MEMBER} className='photo_team' />
						<div className='name_member'>Tarikul Raana</div>
						<div className='description_member'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et
						</div>
					</div>
					<div className='item_member'>
						<img src={MEMBER} className='photo_team' />
						<div className='name_member'>Tarikul Raana</div>
						<div className='description_member'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et
						</div>
					</div>
					<div className='item_member'>
						<img src={MEMBER} className='photo_team' />
						<div className='name_member'>Tarikul Raana</div>
						<div className='description_member'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et
						</div>
					</div>
					<div className='item_member'>
						<img src={MEMBER} className='photo_team' />
						<div className='name_member'>Tarikul Raana</div>
						<div className='description_member'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et
						</div>
					</div>
					<div className='item_member'>
						<img src={MEMBER} className='photo_team' />
						<div className='name_member'>Tarikul Raana</div>
						<div className='description_member'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et
						</div>
					</div>
					<div className='item_member'>
						<img src={MEMBER} className='photo_team' />
						<div className='name_member'>Tarikul Raana</div>
						<div className='description_member'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et
						</div>
					</div>
					<div className='item_member'>
						<img src={MEMBER} className='photo_team' />
						<div className='name_member'>Tarikul Raana</div>
						<div className='description_member'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et
						</div>
					</div>
					<div className='item_member'>
						<img src={MEMBER} className='photo_team' />
						<div className='name_member'>Tarikul Raana</div>
						<div className='description_member'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Team;
