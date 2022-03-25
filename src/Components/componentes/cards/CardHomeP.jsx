import React from "react";
import './CardHomeP.css'

export default function CardHomeP({ img, alt, title, text }) {
    return (

        <div className="col">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt={alt} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}:</h5>
                            <p className="card-text">{text}.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}