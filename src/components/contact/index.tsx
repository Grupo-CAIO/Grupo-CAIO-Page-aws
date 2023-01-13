import React, {useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [categorieSelect, setCategorieSelect] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [detail, setDetail] = useState<string>('');
	const [nameEmpty, setNameEmpty] = useState<string>('');
	const [emailEmpty, setEmailEmpty] = useState<string>('');
	const [emailValid, setEmailValid] = useState<string>('');
	const [detailEmpty, setDetailEmpty] = useState<string>('');
	const [categoryEmpty, setCategoryEmpty] = useState<string>('');
	const [messageConfirmation, setMessageConfirmation] = useState<boolean>(false);
	const [messageError, setMessageError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const EMAIL_REGEX =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	const categories = ['Entrenamiento', 'Consultoría', 'Implementaciones y mantenimiento', 'Diseño UX/UI'];

	useEffect(() => {
		if (categorieSelect) setCategoryEmpty('');
	}, [categorieSelect]);

	const handleInput = (e: any) => {
		switch (e.target.name) {
			case 'name': {
				setName(e?.target?.value);
				break;
			}
			case 'email': {
				setEmail(e?.target?.value);
				break;
			}
			case 'detail': {
				setDetail(e?.target?.value);
				break;
			}
		}
	};

	const validateName = () => {
		if (!name) {
			setNameEmpty('El campo nombre es obligatorio');
		} else {
			setNameEmpty('');
		}
	};

	const validateDetail = () => {
		if (!detail) {
			setDetailEmpty('El campo descripción es obligatorio');
		} else {
			setDetailEmpty('');
		}
	};

	const validateEmail = () => {
		if (!email) {
			setEmailEmpty('El campo correo electrónico es obligatorio');
		} else {
			setEmailEmpty('');
		}

		if (email && !EMAIL_REGEX.test(email)) {
			setEmailValid('El campo correo electrónico es invalido');
		} else {
			setEmailValid('');
		}
	};

	const sendInfoContact = (event: any) => {
		event.preventDefault();
		validateName();
		validateEmail();
		validateDetail();
		if (!categorieSelect) {
			setCategoryEmpty('Debes seleccionar una categoria');
		} else {
			if (!nameEmpty && !emailEmpty && !emailValid && !detailEmpty && !categoryEmpty) {
				setLoading(true);
				event.preventDefault();

				console.log('event.target', event.target);

				emailjs
					.sendForm('service_kpqe1ug', 'template_dlyd4zs', event.target, '_mwZY75vak08KTG4V')
					.then((response: any) => {
						console.log('response.text', response.text);
						setLoading(false);
						if (response?.text === 'OK') {
							setMessageConfirmation(true);
							setCategorieSelect('');
							setDetail('');
							setEmail('');
							setName('');
						}
					})
					.catch((error: any) => {
						if (error) {
							setMessageError(true);
							setLoading(false);
						}
					});
			}
		}
	};

	return (
		<section className='contact_container' id='contact-caio'>
			<div className='contact_container_title'>Contacto</div>

			<form className='container_contact_form' onSubmit={sendInfoContact}>
				<div className='title_form'>
					let us contact
					<br />
					You
				</div>
				<div className='contact'>
					<div className='text-interest'>Estoy interesado en:</div>
					<div className='categories_list_contact'>
						{categories.map((item, i) => {
							if (item === categorieSelect)
								return (
									<div
										key={i}
										onClick={() => setCategorieSelect(item)}
										className='categorie_select'
									>
										{item}
									</div>
								);
							return (
								<div key={i} onClick={() => setCategorieSelect(item)} className='categorie'>
									{item}
								</div>
							);
						})}
					</div>
					{categoryEmpty && <span className='message_error'>{categoryEmpty}</span>}

					<input value={categorieSelect} name='category' style={{display: 'none'}} />

					<input
						type='text'
						placeholder='Ingresa tu nombre ...'
						className='input_name'
						name='name'
						onChange={handleInput}
						onBlur={validateName}
						value={name}
					/>
					{nameEmpty && <span className='message_error'>{nameEmpty}</span>}
					<input
						type='text'
						placeholder='Ingresa tu email ...'
						className='input_email'
						name='email'
						onChange={handleInput}
						onBlur={validateEmail}
						value={email}
					/>
					{emailEmpty && <span className='message_error'>{emailEmpty}</span>}
					{emailValid && <span className='message_error'>{emailValid}</span>}
					<textarea
						placeholder='Cuéntanos sobre tu proyecto'
						className='textarea_detail'
						name='detail'
						onChange={handleInput}
						onBlur={validateDetail}
						value={detail}
					/>
					{detailEmpty && <span className='message_error'>{detailEmpty}</span>}
					<div className='container_send_contact'>
						<button className='send_contact_button'>{loading ? 'Enviando' : 'Enviar'}</button>
					</div>
					{messageConfirmation && <div className='message_confirmation'>Enviado correctamente</div>}
					{messageError && (
						<div className='message_error'>Se ha presentado un error. Intenta Nuevamente</div>
					)}
				</div>
			</form>
		</section>
	);
};

export default Contact;
