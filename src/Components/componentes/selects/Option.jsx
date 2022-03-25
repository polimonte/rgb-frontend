import React from "react";

export default function Option({value, nome}){
    return(
        <option value={value}>{nome}</option>
    );
}