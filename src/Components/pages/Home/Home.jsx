import React, { lazy, Suspense } from 'react'
//import Destino from './ElementosHome/Destino'
//import Promocoes from "./ElementosHome/Promocoes";

const Destino = lazy(() => import('./ElementosHome/Destino'));
const Promocoes = lazy(() => import('./ElementosHome/Promocoes'));

export default function Home() {
    return (
        <>
            <Suspense fallback={<p>Carregando....</p>}>
                <Destino />
            </Suspense>
            <Suspense fallback={<p>Carregando....</p>}>
                <Promocoes />
            </Suspense>

        </>
    );
}