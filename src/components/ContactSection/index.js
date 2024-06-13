
import * as React from 'react';
import * as styles from './styles.module.scss'
import '../../sass/basics.scss'

import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState('');

  const formRef = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSubmitting) return; // Evita múltiples envíos

    setIsSubmitting(true);

    emailjs.sendForm(
      'service_vfe9zrc',
      'template_6hkow0d',
      formRef.current,
      {
        publicKey: 'ZNE1LHkKl3CnpdC0B'
      }
    )
    .then(response => {
      console.log('SUCCESS!');
      setResponseMessage('¡Mensaje enviado correctamente!');
    })
    .catch(error => {
      console.error('Error:', error);
      setResponseMessage('Hubo un problema al enviar el mensaje.');
    });
  };
  
  return (
    <div id='contact-us' className={styles.container}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>CONTÁCTANOS</h1>
        <p>
          Comunícate con nosotros.
        </p>
        <p>
          ¿Tienes dudas de alguno de nuestros productos o servicios?<br></br>
          Envíanos tus dudas, comentarios o requerimientos técnicos, con gusto te asesoraremos.
        </p>
      </div>
      <div className={styles.contactForm}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
              <input
                className={styles.formInput}
                type="text"
                id="name"
                name="name"
                placeholder='Nombre'
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                required
              />
          </div>
          <div className={styles.formGroup}>
              <input
                className={styles.formInput}
                type="email"
                id="email"
                name="email"
                placeholder='Correo Electrónico'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
              />
          </div>
          <div className={styles.formGroup}>
              <textarea
                className={styles.formTextArea}
                id="message"
                name="message"
                rows="4"
                placeholder='Mensaje'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
                required
              ></textarea>
          </div>
          <button type="submit" className={styles.formButton} disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
        <div id="responseMessage" className={styles.emailSuccess}>
          {responseMessage}
        </div>
      </div>
    </div>
  )
}
  
export default ContactSection
