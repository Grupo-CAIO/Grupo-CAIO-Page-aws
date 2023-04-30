import React, {useEffect, useMemo} from 'react';
import LOGO_FOOTER from '../../images/logo-footer.svg';
import ART_DESIGN from '../../images/art-design.svg';
import FACEBOOK from '../../images/facebook.svg';
import INSTAGRAM from '../../images/instagram.svg';
import GI_HUB from '../../images/git-hub.svg';
import STACK_OVER_FLOW from '../../images/stack-over-flow.svg';
import {pathOr} from 'ramda';

const Footer = (props: any) => {
	const isMobile = useMemo(() => pathOr(false, ['isMobile'], props), [props]);

	if (isMobile)
		return (
			<footer className='container_footer'>
				<div className='container_links_mobile'>
					<div className='title_col'>Contáctanos</div>
					<div className='link_col_footer'>Líneas de atención</div>
					<div className='link_col_footer'>jvalenciap@grupo-caio.com</div>
					<div className='title_col'>Contáctanos</div>
					<div className='link_col_footer'>Líneas de atención</div>
					<div className='link_col_footer'>Contáctanos</div>
					<div className='link_col_footer'>+573046192909</div>
					<div className='social_networks'>
						<div className='text_social_networks'>Siguenos</div>
						<img src={FACEBOOK} className='icon_social_network' />
						<img src={INSTAGRAM} className='icon_social_network' />
						<img src={GI_HUB} className='icon_social_network' />
						<img src={STACK_OVER_FLOW} className='icon_social_network' />
					</div>
				</div>
				<div className='container_links_statics'>
					<a href='/politica-de-privacidad' className='link_footer'>
						Política de privacidad
					</a>
					<a href='/terminos-y-condiciones' className='link_footer'>
						Términos y condiciones
					</a>
					<a href='/site-map' className='link_footer'>
						Site map
					</a>
					<a href='/politica-de-cookie' className='link_footer'>
						Política de cookie
					</a>
				</div>
				<div className='container_logo_footer_mobile'>
					<img src={LOGO_FOOTER} className='logo_footer' />
					<div className='reserved_text_mobile'>Todos los derechos reservados CAIO 2022</div>
				</div>
				<div className='logo_final_container'>
					<img src={ART_DESIGN} className='logo_footer_final_mobile' />
				</div>
			</footer>
		);

	return (
		<footer className='container_footer'>
			<div className='content_footer_container'>
				<div className='container_menu_footer'>
					<div className='col_one_footer_content'>
						<img src={LOGO_FOOTER} className='logo_footer' />
						<div className='reserved_text'>Todos los derechos reservados CAIO 2022</div>
					</div>
					<div className='col_two_footer_content'>
						<div className='title_col'>Contáctanos</div>
						<div className='link_col_footer'>Líneas de atención</div>
						<div className='link_col_footer'>jvalenciap@grupo-caio.com</div>
					</div>
					<div className='col_three_footer_content'>
						<div className='title_col'>Contáctanos</div>
						<div className='link_col_footer'>Líneas de atención</div>
						<div className='link_col_footer'>+573046192909</div>
						<div className='social_networks'>
							<div className='text_social_networks'>Siguenos</div>
							<img src={FACEBOOK} className='icon_social_network' />
							<img src={INSTAGRAM} className='icon_social_network' />
							<img src={GI_HUB} className='icon_social_network' />
							<img src={STACK_OVER_FLOW} className='icon_social_network' />
						</div>
					</div>
				</div>

				<div className='container_links_footer'>
					<a href='/politica-de-privacidad/' className='link_footer'>
						Política de privacidad
					</a>
					<a href='/terminos-y-condiciones/' className='link_footer'>
						Términos y condiciones
					</a>
					<a href='/site-map/' className='link_footer'>
						Site map
					</a>
					<a href='/politica-de-cookie/' className='link_footer'>
						Política de cookie
					</a>
				</div>
			</div>
			<div className='logo_footer_container'>
				<img src={ART_DESIGN} className='logo_footer_right' />
			</div>
		</footer>
	);
};

export default Footer;
