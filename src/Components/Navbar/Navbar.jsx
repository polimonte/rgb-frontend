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
                    <ImgNavBar
                        src={Logo}
                        alt="RGB Viagens"
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link home" id="home">
                                HOME.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Destinos" className="nav-link destinos" id="destinos">
                                DESTINOS.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Promocoes" className="nav-link promocoes" id="promocoes">
                                PROMOÇÕES.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contato" className="nav-link contatos" id="contatos">
                                CONTATO.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/MeuCarrinho" className="nav-link meusDestinos" id="meusDestinos">
                                MEU CARRINHO.
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}