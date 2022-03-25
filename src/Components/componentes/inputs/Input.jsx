import React from "react";
import './Input.css';

export default function Input({ label, type }) {
    return (
        <div>
            <label htmlFor="input" className="form-label">{label}</label>
            <input type={type} className="form-control" id="input" />
        </div>
    );
}