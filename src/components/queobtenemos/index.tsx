import React from 'react';
import FristFile from '../../images/1.webp';
import SecondFile from '../../images/2.webp';
import LasFile from '../../images/3.webp';
import Logo from '../../images/logo-color.jpg';

const QueObtenemos = () => {
    return <div className='queobtenemos_section' id='que-obtenemos'>
        <div className='queobtenemos_container'>
            <div className='queobtenemos_sub_message'>
                <span>⸺</span>
                Evolucionemos Juntos
            </div>
            <div className='queobtenemos_title'>
                <h2>¿Qué obtienes con CAIO?</h2>
                <div><img className="queobtenemos_logo" src={Logo}/></div>
            </div>
            <div className='queobtenemos_body_container'>
                <div className='queobtenemos_body_image'>
                    <img src={FristFile} alt="" />
                    <div>
                        <h4 className='queobtenemos_body__title'>Implementación eCommerce</h4>
                        <p className='queobtenemos_body__description'>Implementación, desarrollo y arquitectura de tu tienda online. Partner Certificados VTEX | SHOPIFY</p>
                    </div>
                </div>
                <div className='queobtenemos_body_image'>
                    <img src={SecondFile} alt="" />
                    <h4 className='queobtenemos_body__title'>Networking</h4>
                    <p className='queobtenemos_body__description'>Contamos con una Amplia red de Partners expertos y especializados para potenciar tus proyectos.</p>
                </div>
                <div className='queobtenemos_body_image'>
                    <img src={LasFile} alt="" />
                    <h4 className='queobtenemos_body__title'>Integraciones & Desarrollos</h4>
                    <p className='queobtenemos_body__description'>Equipo de desarrolladores altamente capacitado en integraciones, desarrollos personalizados y automatizaciones a la medida</p>
                </div>
            </div>
        </div>
    </div>
}

export default QueObtenemos;
