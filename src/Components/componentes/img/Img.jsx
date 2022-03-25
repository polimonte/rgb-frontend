import React from "react";

export function Img({ src, alt }) {
    return <img src={src} className="img-fluid rounded-start" alt={alt} />
}

export function ImgNavBar({ src, alt }) {
    return (
        <img className="logo" src={src} alt={alt}></img>
    );
}