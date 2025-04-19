import React, {SyntheticEvent, useState} from "react";
import {Link} from "react-router-dom";
import {enviarCorreoEnlace} from "../constantes/constantes";
import Pie from "../componentes/pie";
import axios from "axios";
import {Helmet} from "react-helmet-async";

const Escribame = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [privacidad, setPrivacidad] = useState(false);
    const [gotcha, setGotcha] = useState("");
    const [mexito, setMexito] = useState("normal");
    const [empiezaTiempo, setEmpiezaTiempo] = useState(Date.now() - parseInt(String(process.env.REACT_APP_CORREO_TIMEOUT), 10) * 1000);
    const [numEnvios, setNumEnvios] = useState(0);

    const enviarCorreo = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            let ahoraTiempo = Date.now();
            let tiempoEntreEnvios = ahoraTiempo - empiezaTiempo;
            setNumEnvios(numEnvios + 1);
            let nuevoCorreo = {
                nombre: nombre,
                correo: correo,
                mensaje: mensaje,
                gotcha: gotcha
            };
            if((!nuevoCorreo.gotcha) && (tiempoEntreEnvios > (parseInt(String(process.env.REACT_APP_CORREO_TIMEOUT), 10) * 1000)) && (numEnvios < parseInt(String(process.env.REACT_APP_CORREO_MAX_ENVIOS), 10)) && privacidad) {
                await axios.post(process.env.REACT_APP_BASE_URL + "escribeme", nuevoCorreo);
                setEmpiezaTiempo(Date.now());
                setNombre("");
                setCorreo("");
                setMensaje("");
                setMexito("enviado");
            } else {
                setMexito("error");
            }
        } catch (e) {
            console.log(e);
            setMexito("error");
        }
    }

    if(mexito === "enviado" || mexito === "error" ) {
        setTimeout(() => {setMexito("normal")}, 2000);
    }

    return (
        <main className={"fade-in"}>
            <Helmet>
                <title>Nuestro Diario • Escríbame</title>
                <meta name="description" content={"Escríbame desde Nuestro Diario."}/>
                <meta property="og:title" content={"Nuestro Diario • Escríbame"}/>
                <meta property="og:description" content={"Escríbame desde Nuestro Diario."}/>
                <meta property="og:site_name" content="Nuestro Diario"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://" + String(process.env.REACT_APP_DOMINIO_PERMITIDO)}/>
            </Helmet>
            <article>
                <h2>Escríbame</h2>
                <p className={"sin-margin-bottom"}>Escríbame un mensaje a través del formulario que se presenta más
                    abajo. O si lo prefiere, <Link to="#" onClick={enviarCorreoEnlace}>hágalo con la aplicación de
                        correo instalada en su ordenador</Link>. Si quiere comentar una entrada, escriba en su mensaje el nombre de la entrada y la fecha de publicación. No olvide indicar sus datos de contacto.</p>
                <img src={require("../imagenes/escribame.jpeg")} alt={"Escríbeme"} title={"Escríbeme"}/>
            </article>
            <form onSubmit={(e) => enviarCorreo(e)}>
                <ul className={"ul-form"}>
                    <li className={"sin-margin-top"}><h3 className={"colorgris"}>Escribe algo…</h3></li>
                    <li><input type="text" className={"nombre"} name="nombre" placeholder="Tu nombre o apodo *"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                               onChange={(e) => setNombre(e.target.value)} value={nombre}/><label>Tu nombre o apodo
                        *</label></li>
                    <li><input type="text" className={"email"} name="email" placeholder="Tu correo electrónico *"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                               onChange={(e) => setCorreo(e.target.value)} value={correo}/><label>Tu correo electrónico
                        *</label></li>
                    <li><textarea className={"mensaje"} name="mensaje" placeholder="Escribe aquí tu mensaje… *"
                                  autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                                  onChange={(e) => setMensaje(e.target.value)} value={mensaje}></textarea><label>Escribe
                        aquí tu mensaje… *</label></li>
                    <li><label className={"contenedor-label noetiquetaflotante"} htmlFor="privacidad"><input
                        type="checkbox" id="privacidad" className={"especial admin"} name="privacidad"
                        onChange={() => setPrivacidad(!privacidad)}/><span className={"checkmark left-cero"}></span>Entiendo y acepto la <strong><Link to={"/privacidad"}>política
                        de privacidad</Link></strong>.</label></li>
                    <li className={"invisible"}><input type="hidden" name="gotcha"
                                                     onChange={(e) => setGotcha(e.target.value)}/></li>
                    <li>
                        <button type="submit">{mexito == "enviado" ?
                            <i className={"mdi mdi-button"}>done</i> : (mexito == "error" ?
                                <i className={"mdi mdi-button"}>close</i> : <span>Enviar</span>)}</button>
                    </li>
                </ul>
            </form>
            <Pie/>
        </main>
)
}

export default Escribame;