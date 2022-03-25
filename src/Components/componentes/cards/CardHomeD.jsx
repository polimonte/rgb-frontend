import React from "react";
import './CardHomeD.css'

export default function CardHomeD({img, alt, title}) {
    return (
        <div className="col">
            <div className="card h-50">
                <img src={img} className="card-img-top" alt={alt} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    );
}