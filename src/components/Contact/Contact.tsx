import React from 'react'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import email from '../../images/email.png'
import whatsapp from '../../images/whatsapp.png'
import './Contact.css'

function Contact() {
  return (
    <div>
        <h1>
            Contato
        </h1>
        <div className="ContactImages">
            <a href="https://github.com/JuliaGMartins" target='_blank'>
                <img className="Icon" src={github} alt="github"></img>
            </a>
            <a href="https://www.linkedin.com/in/julia-gmartins/" target='_blank'>
                <img className="Icon" src={linkedin} alt="linkedin"></img>
            </a>
            <a href="mailto:julia.geremias.martins@gmail.com" target='_blank'>
                <img className="Icon" src={email} alt="gmail"></img>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5551982321389" target='_blank'>
                <img className="Icon" src={whatsapp} alt="whatsapp"></img>
            </a>
        </div>
    </div>
  )
}

export default Contact