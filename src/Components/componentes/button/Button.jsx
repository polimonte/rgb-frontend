import React from "react";
import './Button.css';

export default function Button({texto, type, customClass}) {
    return (
        <div className="col-12">
            <button type={type} className={`btnpesquisar btn ${customClass} `} >{texto}</button>
        </div>
    );
}