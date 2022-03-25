import React from "react";
import CardHomeD from "../../../componentes/cards/CardHomeD";
import './Destino.css'
import fdn from "../../../../img/fernando.svg"
import mrg from "../../../../img/maragogi.svg"
import nt from "../../../../img/natal.svg"
import pa from "../../../../img/portoalegre.svg"
import re from "../../../../img/recife.svg"
import svd from "../../../../img/salvador.svg"
import rj from "../../../../img/rj.svg"
import sl from "../../../../img/saoluis.svg"
import { Link } from "react-router-dom";

export default function Destino () {
    return (
        <section className="cards">
            <h3 className="p-2"><Link to="/Destinos">DESTINOS.</Link></h3>
            <div className="row row-cols-1 row-cols-md-4 g-4" >
                <CardHomeD
                    img={fdn}
                    alt="FERNANDO DE NORONHA"
                    title="FERNANDO DE NORONHA."
                /><CardHomeD
                    img={mrg}
                    alt="MARAGOGI"
                    title="MARAGOGI."
                /><CardHomeD
                    img={nt}
                    alt="NATAL"
                    title="NATAL."
                />
                <CardHomeD
                    img={pa}
                    alt="PORTO ALEGRE"
                    title="PORTO ALEGRE."
                />
                <CardHomeD
                    img={re}
                    alt="RECIFE"
                    title="RECIFE."
                />
                <CardHomeD
                    img={svd}
                    alt="SALVADOR"
                    title="SALVADOR."
                />
                <CardHomeD
                    img={rj}
                    alt="RIO DE JANEIRO"
                    title="RIO DE JANEIRO."
                />
                <CardHomeD
                    img={sl}
                    alt="SÃO LUIS DO MARANHÃO"
                    title="SÃO LUIS DO MARANHÃO."
                />
            </div>
        </section>
    );
}