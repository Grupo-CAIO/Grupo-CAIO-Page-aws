import {pathOr} from 'ramda';
import React, {useMemo} from 'react';
import ReturnButton from '../return';

const StaticPage = (props: any) => {
	const content = useMemo(() => pathOr('', ['content'], props), [props]);
	return (
		<section className='container_content_static'>
			<ReturnButton />
			<div className='content_static' dangerouslySetInnerHTML={{__html: content}}></div>
		</section>
	);
};

export default StaticPage;
