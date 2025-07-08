import React from 'react'
import './Contacto.css'

export const Contacto = () => {
  return (
    <>
    <div className='contactar'>
        <form
      action="https://formspree.io/f/{FORM_ID}"
      className="fs-form"
      target="_top"
      method="POST"
    >
      <div className="fs-field">
        <label className="fs-label" htmlFor="name">Nombre</label>
        <input className="fs-input" id="name" name="name" />
      </div>
      <div className="fs-field">
        <label className="fs-label" htmlFor="email">Email</label>
        <input className="fs-input" id="email" name="email" required />
      </div>
      <div className="fs-field">
        <label className="fs-label" htmlFor="message">Mensaje</label>
        <textarea className="fs-textarea" id="message" name="message"></textarea>
        <p className="fs-description">Solemos responder en entre uno y dos días</p>
      </div>
      <div className="fs-button-group">
        <button className="fs-button" type="submit">Enviar</button>
      </div>
    </form>
    </div>
    </>
  )
}
