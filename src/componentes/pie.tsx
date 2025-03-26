import React from "react";
import {Link} from "react-router-dom";
import {anoActual} from "../constantes/constantes";

const Pie = () => {
    return (
        <footer>
            <h1>
                <strong>
                    <Link to={"/escribame"} className={"sin-subrayar"}>escríbame</Link> • <Link to={"/acceso"} className={"sin-subrayar"}>acceso</Link> • <Link to={"/aviso"} className={"sin-subrayar"}>aviso</Link> • <Link to={"/privacidad"} className={"sin-subrayar"}>privacidad</Link>
                </strong>
            </h1>
            <h1><strong>© 2017-{anoActual()} • José Vicente del Valle Fayos</strong></h1>
        </footer>
    )
}

export default Pie;