import React, { useState } from 'react';

const Portapapeles = ({ url }:any) => {
    const [copiado, setCopiado] = useState(false);
    const copiarUrl = async () => {
        try {
            await navigator.clipboard.writeText(url); setCopiado(true); setTimeout(() => setCopiado(false), 2000);
        } catch (err) {
            console.error("error al copiar la url: ", err); }
    };
    return (
        <a onClick={copiarUrl} title={"Copiar URL"}>{copiado ? <i className={"mdi"}>check</i> : <i className={"mdi"}>link</i>}<input type="text" className={"invisible"} value={url} readOnly/></a>
)
    ;
};

export default Portapapeles