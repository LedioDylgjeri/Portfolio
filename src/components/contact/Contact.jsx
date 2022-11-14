import './contact.css'
import { TfiEmail } from 'react-icons/tfi'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y4j95v1', 'template_75nvzqv', form.current, 'H_L-KXIrQe_lxq7eI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>If you wish to get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <div className="contact_option">
            <TfiEmail />
            <h4>Email</h4>
            <h5>lediodylgjeri@gmail.com</h5>
            <a href="mailto:lediodylgjeri@gmail.com">Feel free to email me</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary email-btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;