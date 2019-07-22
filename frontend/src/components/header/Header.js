import React from 'react';
import { Link } from 'react-router-dom'

//STYLE
import './Header.css'

//IMAGENS 
import logo from '../../assets/img/logo.svg';
import camera from '../../assets/img/camera.svg';


export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="InstaGuaxi" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="Enviar Publicação" />
        </Link>
      </div>
    </header>
  );
}
