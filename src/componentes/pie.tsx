import React from "react";
import {Link} from "react-router-dom";
import {correoDestino} from "../constantes/constantes";

const Pie = () => {

    const enviarCorreo = () => {
        window.open("mailto:" + correoDestino);
    }

    return (
        <footer>
            <p>
                <strong>
                    <Link to="#" className="sin-subrayar" onClick={enviarCorreo}>escríbeme</Link> · <Link to={"/acceso"} className="sin-subrayar">acceso</Link> · <Link to={"/aviso"} className="sin-subrayar">aviso</Link> · <Link to={"/privacidad"} className="sin-subrayar">privacidad</Link>
                </strong>
            </p>
            <h1><strong>© desde 2017 · José Vicente del Valle Fayos</strong></h1>
        </footer>
    )
}

export default Pie;