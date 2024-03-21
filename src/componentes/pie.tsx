import React from "react";
import {Link} from "react-router-dom";
import {enviarCorreo, anoActual} from "../constantes/constantes";

const Pie = () => {
    return (
        <footer>
            <p>
                <strong>
                    <Link to="#" className="sin-subrayar" onClick={enviarCorreo}>escríbeme</Link> • <Link to={"/acceso"} className="sin-subrayar">acceso</Link> • <Link to={"/aviso"} className="sin-subrayar">aviso</Link> • <Link to={"/privacidad"} className="sin-subrayar">privacidad</Link>
                </strong>
            </p>
            <h1><strong>© 2017-{anoActual()} • José Vicente del Valle Fayos</strong></h1>
        </footer>
    )
}

export default Pie;