import React, {Component} from "react";
import {Link} from "react-router-dom";

const Cabecera = () => {
    return (
        <header>
            <h6><Link to={"https://www.nuestrodiario.es"}><span className={"mdi"}>anchor</span></Link></h6>
        </header>
    )
}

export default Cabecera;