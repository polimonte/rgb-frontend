import React, { lazy, Suspense } from "react";
import './Form.css'
//import Input from "../inputs/Input";
import { SelectClasses, SelectDestinos } from "../selects/Select";
import Button from "../button/Button";

const Input = lazy(() => import('../inputs/Input'))

export function FormDestinos() {

    const submit = (e) => {
        e.prevent.default();

    }

    return (
        <div className="form-cadastroD">
            <form className="row g-4" onSubmit={submit}>
                <div className="col-md-6 ">
                    <Suspense fallback={(<p>Carregando....</p>)}>
                        <Input
                            label="ORIGEM."
                            type="text"
                        />
                    </Suspense>

                </div>
                <div className="col-md-6 ">
                    <SelectDestinos />
                </div>
                <div className="col-md-6">
                    <Suspense fallback={(<p>Carregando....</p>)}>
                        <Input
                            label="Nº DE PASSAGEIROS."
                            type="number"
                        />
                    </Suspense>

                </div>
                <div className="col-md-6">
                    <SelectClasses />
                </div>
                <div className="col-md-6 ">
                    <Suspense fallback={(<p>Carregando....</p>)}>
                        <Input
                            label="IDA."
                            type="date"
                        />
                    </Suspense>

                </div>
                <div className="col-md-6 ">
                    <Suspense fallback={(<p>Carregando....</p>)}>
                        <Input
                            label="VOLTA."
                            type="date"
                        />
                    </Suspense>

                </div>
                <Button
                    texto="ADICIONE AO CARRINHO."
                    type="submit"
                    customClass="btn-outline-danger"
                />
            </form>
        </div>
    );
}

export function FormContato() {

    const submit = (e) => {
        e.prevent.default()
        console.log('ola')
        //handleSubmit(project)
    }

    return (
        <section className="mcontatos">
            <h3>CONTATO.</h3>
            <form onSubmit={submit}>
                <div>
                    <Suspense fallback={(<p>Carregando....</p>)}>
                        <Input
                            label="NOME COMPLETO."
                            type="text"
                        />
                    </Suspense>

                </div>
                <div >
                    <Suspense fallback={(<p>Carregando....</p>)}>
                        <Input
                            label="EMAIL."
                            type="email"
                        />
                    </Suspense>

                </div>
                <div >
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">FALE CONOSCO.</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <Button
                    texto="ENVIAR."
                    type="submit"
                    customClass="btn-lg btn-outline-primary mt-2"
                />
            </form>
        </section>
    );
}
