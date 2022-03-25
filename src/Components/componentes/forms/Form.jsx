import React from "react";
import './Form.css'
import Input from "../inputs/Input";
import { SelectClasses, SelectDestinos } from "../selects/Select";
import Button from "../button/Button";

export function FormDestinos() {

    const submit = (e) => {
        e.prevent.default();

    }

    return (
        <div className="form-cadastroD">
            <form className="row g-4" onSubmit={submit}>
                <div className="col-md-6 ">
                    <Input
                        label="ORIGEM."
                        type="text"
                    />
                </div>
                <div className="col-md-6 ">
                    <SelectDestinos />
                </div>
                <div className="col-md-6">

                    <Input
                        label="Nº DE PASSAGEIROS."
                        type="number"
                    />
                </div>
                <div className="col-md-6">
                    <SelectClasses />
                </div>
                <div className="col-md-6 ">
                    <Input
                        label="IDA."
                        type="date"
                    />
                </div>
                <div className="col-md-6 ">
                    <Input
                        label="VOLTA."
                        type="date"
                    />
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
                    <Input
                        label="NOME COMPLETO."
                        type="text"
                    />
                </div>
                <div >
                    <Input
                        label="EMAIL."
                        type="email"
                    />
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
