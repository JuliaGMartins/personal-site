import React from 'react'
import './Introduction.css'
import avatar from '../../images/avatar.jpg'
import hange from '../../images/Hange.webp'

function Introduction() {
  return (
    <div>
    <div>
      <div className="circles">
        <div className="circle-one"></div>
        <div className="circle-two"></div>
        {/* <img className="circle" src={avatar} ></img> */}
        <div className="circle"></div>
      </div>
      <div>
        <h1 className="name">
          Júlia 
          <br />
          Martins
        </h1>
        <h1 className="sub">
        Full-stack Developer
        </h1>
      </div>
    </div>
    </div>
  )
}

export default Introduction