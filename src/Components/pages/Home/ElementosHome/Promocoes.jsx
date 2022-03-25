import React from "react";
import CardHomeP from "../../../componentes/cards/CardHomeP";
import './Promocoes.css';
import promo2 from '../../../../img/15_.svg'
import promo4 from '../../../../img/GANHE1.svg'
import { Link } from "react-router-dom";


export default function Promocoes() {
    return (

        <section className="mpromocoes">
            <h3 className="p-2"> <Link to="/Promocoes">PROMOÇÕES.</Link></h3>
            <div className="row row-cols-1 row-cols-md-2 g-4" >
                <CardHomeP
                    img={promo2}
                    alt="Promoção 15%"
                    title="NAS COMPRAS COM OS DESTINOS"
                    text="SALVADOR OU PORTO ALEGRE"
                />
                <CardHomeP
                    img={promo4}
                    alt="Promoção GANHE 1"
                    title="EM COMPRAS COM"
                    text="3 OU MAIS PASSAGEIROS"
                />
            </div>
        </section>
    );
}