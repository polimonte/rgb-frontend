import React, { lazy, Suspense } from 'react'
import './Promocoes.css';
//import CardPromocoes from '../../componentes/cards/CardPromocoes';
import promo1 from '../../../img/10_.svg';
import promo2 from '../../../img/15_.svg';
import promo3 from '../../../img/20_.svg';
import promo4 from '../../../img/GANHE1.svg';

const CardPromocoes = lazy(() => import('../../componentes/cards/CardPromocoes'));

export default function Promocoes() {
    return (
        <div class="mpromocoes">
            <Suspense fallback={<p>Carregando....</p>}>
                <CardPromocoes
                    img={promo1}
                    alt="Promção 10 porcento"
                    title="NAS COMPRAS COM OS DESTINOS"
                    text="RECIFE OU NATAL"
                />
            </Suspense>
            <Suspense fallback={<p>Carregando....</p>}>
                <CardPromocoes
                    img={promo2}
                    alt="Promoção 15 porcento"
                    title="NAS COMPRAS COM OS DESTINOS"
                    text="SALVADOR OU PORTO ALEGRE"
                />
            </Suspense>
            <Suspense fallback={<p>Carregando....</p>}>
                <CardPromocoes
                    img={promo3}
                    alt="Promoção 20 porcento"
                    title="NAS COMPRAS COM"
                    text="3 OU MAIS PASSAGEIROS. <br/> DESTINO PARA FERNANDO DE NORONHA"
                />
            </Suspense>
            <Suspense fallback={<p>Carregando....</p>}>
                <CardPromocoes
                    img={promo4}
                    alt="Promoção ganhe uma passagem"
                    title="EM COMPRAS COM"
                    text="3 OU MAIS PASSAGEIROS"
                />
            </Suspense>

        </div>
    );
}