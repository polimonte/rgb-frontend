import React, { lazy, Suspense } from 'react'
//import { FormContato } from "../../componentes/forms/Form";
import './Contato.css';

const FormContato = lazy(() => import('../../componentes/forms/Form'));

export default function Contato() {
    return (
        <Suspense fallback={<p>Carregando....</p>}>
            <FormContato />
        </Suspense>

    );
}