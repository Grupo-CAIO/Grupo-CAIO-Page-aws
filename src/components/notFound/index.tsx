import React from 'react';
import imageNotFound from '../../images/not-found.png';

const NotFound = () => {
	return (
		<section className='container_not_found'>
			<img src={imageNotFound} />
			<div className='text_not_found'>NOT FOUND</div>
		</section>
	);
};

export default NotFound;
