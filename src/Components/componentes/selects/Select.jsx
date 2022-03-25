import React from "react";
import Option from "./Option";

export function SelectDestinos() {
    return (
        <>
            <label htmlFor="select" className="form-label">DESTINOS.</label>
            <select id="select" className="form-select">
                <Option
                    value=""
                    nome=""
                />
                <Option
                    value="fer"
                    nome="FERNANDO DE NORONHA."
                />
                <Option
                    value="mar"
                    nome="MARAGOGI."
                />
                <Option
                    value="nat"
                    nome="NATAL."
                />
                <Option
                    value="poa"
                    nome="PORTO ALEGRE."
                />
                <Option
                    value="rec"
                    nome="RECIFE."
                />
                <Option
                    value="rj"
                    nome="RIO DE JANEIRO."
                />
                <Option
                    value="sal"
                    nome="SALVADOR."
                />
                <Option
                    value="sl"
                    nome="SÃO LUÍS."
                />
            </select>
        </>
    );
}

export function SelectClasses() {
    return (
        <>
            <label htmlFor="select" className="form-label">CLASSE.</label>
            <select id="select" className="form-select">
                <Option
                    value=""
                    nome=""
                />
                <Option
                    value="cec"
                    nome="CLASSE ECONOMICA."
                />
                <Option
                    value="pc"
                    nome="PRIMEIRA CLASSE."
                />
                <Option
                    value="cex"
                    nome="CLASSE EXECUTIVA."
                />
            </select>
        </>
    );
}