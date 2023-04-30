import {useState, useEffect} from 'react';
import {useSpring} from 'framer-motion';

const getWindowDimensions = () => {
	if (typeof window !== "undefined") {
	const {innerWidth: width, innerHeight: height} = window;
	return {
		width,
		height,
	};}
	else{
		return {
			innerWidth:1200,
			innerHeight:800
		};
	}

};

const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions.width <= 1025;
};

const scale = (scrollYProgress: any) => {
	return useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
};

export const squareVariantsNegative = {
	visible: {opacity: 1, x: 0, transition: {duration: 1}},
	hidden: {opacity: 0, x: -100},
};

export const squareVariantsPositive = {
	visible: {opacity: 1, x: 0, transition: {duration: 1}},
	hidden: {opacity: 0, x: 100},
};

export const services = [
	{
		name: 'Implementaciones y <b>mantenimiento</b>',
		description:
			'Implementación de desarrollo en VTEX IO, la plataforma omnicanal líder de e-commerce en Latinoamérica, presente en más de 45 países con más de 3000 tiendas activas.<br> Rediseño, actualización y mantenimiento de comercios electrónicos.',
	},
	{
		name: 'Entrenamiento',
		description:
			'Formamos personas para realizar tareas y solucionar los problemas específicos de su comercio electrónico.<br/>	Entrenamiento a equipos de desarrollo, diseño, marketing, gestión de clientes y módulo logístico de promociones.',
	},
	{
		name: 'Consultoría',
		description:
			'Servicio de consultoría orientado en la planificación comercial, el análisis competitivo y la implementación de desarrollos.',
	},
	
];

export {useWindowDimensions, scale};
