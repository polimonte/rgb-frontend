import React, { lazy, Suspense } from 'react'
//import Table from "../../componentes/Tabelas/Table";
import './MeuCarrinho.css';

const Table = lazy(() => import('../../componentes/Tabelas/Table'));

export default function MeuCarrinho() {
    return (
        <div class="mDestinos">
            <section class="carrinho">
                <h4>CARRINHO.</h4>
                <Suspense fallback={<p>Carregando....</p>}>
                    <Table />
                </Suspense>

            </section>
        </div>
    );
}