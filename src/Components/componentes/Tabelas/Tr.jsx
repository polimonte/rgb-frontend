import React from "react";
import Button from "../button/Button";
import Th from './Th';

export function TrHead({ scope }) {
    return (
        <tr>
            <Th scope={scope} texto="ID" />
            <Th scope={scope} texto="ORIGEM" />
            <Th scope={scope} texto="DESTINO" />
            <Th scope={scope} texto="IDA" />
            <Th scope={scope} texto="VOLTA" />
            <Th scope={scope} texto="Nº DE PASSAGEIROS" />
            <Th scope={scope} texto="CLASSE" />
        </tr>
    );
}

export function TrBody({ id, origem, destino, ida, volta, nPassageiros, classe }) {
    return (
        <tr>
            <Th texto={id} />
            <Th texto={origem} />
            <Th texto={destino} />
            <Th texto={ida} />
            <Th texto={volta} />
            <Th texto={nPassageiros} />
            <Th texto={classe} />
            <div>
                <Button
                    type="submit"
                    customClass="btn-sm btn-success"
                    texto="COMPRAR"
                />
                <Button
                    type="submit"
                    customClass="btn-sm btn-danger"
                    texto="DELETAR"
                />
            </div>
        </tr>
    );
}