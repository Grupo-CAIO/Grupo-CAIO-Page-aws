import React from 'react';
import arrow from '../../images/arrow-left.svg';

const ReturnButton = () => {
	return (
		<a className='container' href='/'>
			<div className='btn'>
				<h1 className='title_button_return'>Regresar</h1>
				<img src={arrow} className='icon_button_return' />
			</div>
		</a>
	);
};

export default ReturnButton;
