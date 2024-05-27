import React from 'react';
import ImageBanner from '../../images/images_11.webp'

const NosotrosSection = () => {
    return <div className='nosotros-section' id='sobre-nosotros'>
        <div className='nosotros-section-container'>
            <div className='nosotros-section-description'>
                <div>
                    <h6 className='nosotros-adding'>
                        <span>⸺</span>
                        Digital Commerce
                    </h6>
                    <h3 className='nosotros-section-title'>¿Por qué nosotros?</h3>
                    <p>
                        Con más de 12 años de experiencia, nuestro equipo comprende la importancia de la Evolución Continua en el mundo del Comercio Electrónico.<br/><br/>
                        Nos enfocamos en proporcionar herramientas que permitan a nuestros clientes que así lo deseen la Autoadministración de su eCommerce, focalizándonos en desarrollar nuestro potencial, para incorporar funcionalidades y elementos que permitan  diferenciarnos del mercado. En nuestra búsqueda constante de Innovación y Desarrollo, generamos sistemas que garanticen una operación Óptima y Eficiente. Te invitamos a ser parte de esta Aventura.
                    </p>
                </div>
            </div>
            <div className='nosotros-section-image'>
                <img src={ImageBanner} alt="" />
            </div>
        </div>
    </div>
}

export default NosotrosSection
