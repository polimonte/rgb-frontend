import React from "react";
import './CardPromocoes.css'
import {Img} from "../img/Img";

export default function CardPromocoes ({title, text, img, alt}) {
    return (
        <div className="card mb-3 mt-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <Img
                        src={img}
                        alt={alt}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{title}:</h4>
                        <p className="card-text">{text}.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}