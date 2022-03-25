import React from "react";
import './Navbar.css'
import Logo from '../../img/logo.png';
import { Link } from "react-router-dom";
import { ImgNavBar } from "../componentes/img/Img";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-black" id="menu">
            <div className="container-fluid">
                <Link to="/">
                    <a className="navbar-brand">
                        <ImgNavBar
                            src={Logo}
                            alt="RGB Viagens"
                        />
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/">
                                <a className="nav-link home" id="home" >HOME.</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Destinos">
                                <a className="nav-link destinos" id="destinos" >DESTINOS.</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Promocoes">
                                <a className="nav-link promocoes" id="promocoes" >PROMOÇÕES.</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contato">
                                <a className="nav-link contatos" id="contatos">CONTATO.</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/MeuCarrinho">
                                <a className="nav-link meusDestinos" id="meusDestinos" >MEU CARRINHO.</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}