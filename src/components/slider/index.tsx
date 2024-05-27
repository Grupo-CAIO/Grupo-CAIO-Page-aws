import React from 'react';

import Marcas from '../../images/marcas.png';

const SliderCustom = () => {

    const ref = React.useRef();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return <div className='slider-section' id='slider-home'>
        <div className='section-container'>
            <div className='sliedr-section-divider'>
                <h2 className='slider-title'>Súmate a un Nuevo Aire</h2>
                <ul className='slider-list'>
                    <li className='slider-list-item'>Transforma mantención en gestión <b>evolutivo.</b></li>
                    <li className='slider-list-item'>Cambia dependencia por <b>autoadministración.</b></li>
                    <li className='slider-list-item'>Visualiza eCommerce potenciando la <b>Omnicanalidad.</b></li>
                    <li className='slider-list-item'>Convierte la burocracia en <b>integraciones y desarrollos.</b></li>
                    <li className='slider-list-item'>Revoluciona con VTEX al siguiente nivel*.</li>
                </ul>
                <div className='slider-lable-container'>
                    <div className='slider-label-text'>
                        <span><b>*Caso de éxito</b> Jackie Guiloff</span>
                    </div>
                    <div className='slider-label-text'>
                        <span>*Treck Finalista Industrial Retail: B2B / D2C / B2B2C <b>2024</b></span>
                    </div>
                    <div className='slider-label-text'>
                        <span>*Dluchi Finalista Industrial Retail: Pharma & Beauty <b>2024</b></span>
                    </div>
                    <div className='slider-footer-container'>
                        <a className='slider-contact-button' href='#contact-caio'>Contáctanos</a>
                    </div>
                </div>
            </div>
            <div className='sliedr-section-divider'>
                <div className='sliedr-section-gallery'>
                    <img src={Marcas} alt="" />
                    <span className='label-gallery'>Nuestras Marcas Aliadas*</span>
                </div>
            </div>
        </div>
    </div>
}

export default SliderCustom;
