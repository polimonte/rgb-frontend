import React from "react";
import { TrBody, TrHead } from "./Tr";

export default function Table() {
    return (
        <table class="table table-hover">
            <thead>
                <TrHead scope="col"/>
            </thead>
            <tbody>
                <TrBody
                    id="1"
                    origem="Belo Horizonte"
                    destino="Fortaleza"
                    ida="22/02/2022"
                    volta="01/03/2022"
                    nPassageiros="4"
                    classe="Classe Economica"
                />
                <TrBody
                    id="2"
                    origem="Bahia"
                    destino="Rondonia"
                    ida="03/04/2022"
                    volta="19/04/2022"
                    nPassageiros="3"
                    classe="Classe Executiva"
                />
            </tbody>
            
        </table>
    );
}