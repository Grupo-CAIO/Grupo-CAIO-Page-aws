import React, { useState, useMemo } from 'react';
import Logo from '../../images/icono.png';
import LogoSitio from '../../images/logo-color.jpg';
import LINKEDIN from '../../images/linkedin.svg';
import WHATSAPP from '../../images/whatsapp.svg';
import INSTAGRAM from '../../images/instagram.svg';
import { pathOr } from 'ramda';

const Header = (props: any) => {

	const [show, setShow] = useState<boolean>(false);
	const scrollPosition = useMemo<number>(() => pathOr(0, ['scrollPosition'], props), [props]);
	const isMobile = useMemo<any>(() => pathOr(false, ['isMobile'], props), [props]);

	if (isMobile)
		return (
			<header className={`caio_header_container ${scrollPosition > 5 ? 'fixed_position' : ''}`} style={{ height: show ? '100%' : '61px' }}>
				<div className='principal_content'>
					<a href='/#banner'>
						{scrollPosition > 5 ? <img src={LogoSitio} className='logo' /> : <img src={Logo} className='logo' />}
					</a>
					{show ? (
						<div className='menu_buttom' onClick={() => setShow(false)}>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
								<path d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z' />
							</svg>
						</div>
					) : (
						<div className='menu_buttom' onClick={() => setShow(true)}>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
								<path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
							</svg>
						</div>
					)}
				</div>

				{show && (
					<div className='container_menu_mobile'>
						<div
							className='item_menu_mobile'
							onClick={() => {
								setShow(false);
							}}
						>
							<a href='#banner-home' className='link_menu_mobile'>
								INICIO
							</a>
						</div>
						<div
							className='item_menu_mobile'
							onClick={() => {
								setShow(false);
							}}
						>
							<a href='/#services-caio' className='link_menu_mobile'>
								UN NUEVO AIRE
							</a>
						</div>
						<div
							className='item_menu_mobile'
							onClick={() => {
								setShow(false);
							}}
						>
							<a href='/#contact-caio' className='link_menu_mobile'>
								¿POR QUÉ NOSOTROS?
							</a>
						</div>
						<div
							className='item_menu_mobile'
							onClick={() => {
								setShow(false);
							}}
						>
							<a href='/#contact-caio' className='link_menu_mobile'>
								¿QUÉ OBTIENES?
							</a>
						</div>
						<div
							className='item_menu_mobile'
							onClick={() => {
								setShow(false);
							}}
						>
							<a href='/#contact-caio' className='link_menu_mobile'>
								ESCRIBENOS
							</a>
						</div>
					</div>
				)}
			</header>
		);

	return (
		<header className={`caio_header_container ${scrollPosition > 5 ? 'fixed_position' : ''}`}>
			<div>
				<a href='#banner-home' className='logo-general'>
					{scrollPosition > 5 ? <img src={LogoSitio} className='logo' /> : <img src={Logo} className='logo' />}
				</a>
			</div>
			<ul className='caio_header_container_list'>
				<li className='caio_header_container_list_item'>
					<a className='caio_header_container_list_item_link' href='#banner-home'>
						INICIO
					</a>
				</li>

				<li className='caio_header_container_list_item'>
					<a className='caio_header_container_list_item_link' href='#slider-home'>
						UN NUEVO AIRE
					</a>
				</li>
				<li className='caio_header_container_list_item'>
					<a className='caio_header_container_list_item_link' href='#sobre-nosotros'>
						¿POR QUÉ NOSOTROS?
					</a>
				</li>
				<li className='caio_header_container_list_item'>
					<a className='caio_header_container_list_item_link' href='#que-obtenemos'>
						¿QUÉ OBTIENES?
					</a>
				</li>
				<li className='caio_header_container_list_item'>
					<a className='caio_header_container_list_item_contact' href='#contact-caio'>
						ESCRÍBENOS
					</a>
				</li>
			</ul>
			<a target='_blank' href='https://cetrik.com/' className='caio_header_cetrik'>CETRIK</a>
			<div className='social_header'>
				<a href='https://api.whatsapp.com/send?phone=573197890372&text=%C2%A1Hola%20CAIO!%20Quiero%20m%C3%A1s%20informaci%C3%B3n' target='_blank'><img src={WHATSAPP} className='icon_social_network whatsapp' /></a>
				<a href='http://linkedin.com/company/grupo-caio' target='_blank'><img src={LINKEDIN} className='icon_social_network linkedin' /></a>
				<a href='https://www.instagram.com/grupo_caio?igsh=OXYwdG1uN3kyNXNw' target='_blank'><img src={INSTAGRAM} className='icon_social_network facebook' /></a>
			</div>
		</header>
	);
};

export default Header;
