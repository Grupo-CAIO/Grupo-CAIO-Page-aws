import React, {useState, useMemo} from 'react';
import Logo from '../../images/logo.png';
import {pathOr} from 'ramda';

const Header = (props: any) => {
	const [show, setShow] = useState<boolean>(false);
	const isMobile = useMemo(() => pathOr(false, ['isMobile'], props), [props]);

	if (isMobile)
		return (
			<header className='caio_header_container' style={{height: show ? '100%' : '61px'}}>
				<div className='principal_content'>
					<a href='/#banner'>
						<img src={Logo} className='logo' />
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
							<a href='/#about-caio' className='link_menu_mobile'>
								Sobre CAIO
							</a>
						</div>
						<div
							className='item_menu_mobile'
							onClick={() => {
								setShow(false);
							}}
						>
							<a href='/#team-caio' className='link_menu_mobile'>
								Nuestro Equipo
							</a>
						</div>
						<div
							className='item_menu_mobile'
							onClick={() => {
								setShow(false);
							}}
						>
							<a href='/#services-caio' className='link_menu_mobile'>
								Servicios
							</a>
						</div>
						<div
							className='item_menu_mobile'
							onClick={() => {
								setShow(false);
							}}
						>
							<a href='/#contact-caio' className='link_menu_mobile'>
								Contacto
							</a>
						</div>
					</div>
				)}
			</header>
		);

	return (
		<header className='caio_header_container'>
			<div>
				<a href='/#banner'>
					<img src={Logo} className='logo' />
				</a>
			</div>
			<ul className='caio_header_container_list'>
				<li className='caio_header_container_list_item'>
					<a className='caio_header_container_list_item_link' href='/#about-caio'>
						Sobre <b>CAIO</b>
					</a>
				</li>
				<li className='caio_header_container_list_item'>
					<a className='caio_header_container_list_item_link' href='/#team-caio'>
						Nuestro Equipo
					</a>
				</li>
				<li className='caio_header_container_list_item'>
					<a className='caio_header_container_list_item_link' href='/#services-caio'>
						Servicios
					</a>
				</li>
				<li className='caio_header_container_list_item'>
					<a className='caio_header_container_list_item_contact' href='/#contact-caio'>
						Contacto
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
