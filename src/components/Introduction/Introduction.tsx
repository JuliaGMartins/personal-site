import React from 'react'
import './Introduction.css'
import avatar from '../../images/avatar.jpg'

function Introduction() {
  return (
    <div>
    <div>
      <h1 className="sub">
        Full-stack Developer
      </h1>
      <h1 className="name">
        Júlia
        <br />
        Martins
      </h1>
      <div className="circles">
        <div className="circle-one"></div>
        <div className="circle-two"></div>
        <img className="avatar" src={avatar} ></img>
      </div>
    </div>
    </div>
  )
}

export default Introduction