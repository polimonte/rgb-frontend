import React, { lazy, Suspense } from 'react'
import './Destinos.css'
//import { FormDestinos } from "../../componentes/forms/Form";

const FormDestinos = lazy(() => import('../../componentes/forms/Form'));

export default function Destinos() {
    return (
        <Suspense fallback={<h2>Carregando....</h2>}>
            <FormDestinos />
        </Suspense>

    );
}