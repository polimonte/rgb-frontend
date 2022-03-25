import React from "react";

export default function Th({ scope, texto }) {
    return (
        <th scope={scope}>{texto}</th>
    );
}