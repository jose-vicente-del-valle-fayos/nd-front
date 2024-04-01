import React, {SyntheticEvent, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {variantesPagina, enviarCorreoEnlace} from "../constantes/constantes";
import Pie from "../componentes/pie";
import axios from "axios";

const Escribeme = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [privacidad, setPrivacidad] = useState(false);
    const [gotcha, setGotcha] = useState("");
    const [mexito, setMexito] = useState("normal");
    const [empiezaTiempo, setEmpiezaTiempo] = useState(Date.now() - parseInt(String(process.env.REACT_APP_CORREO_TIMEOUT), 10) * 1000);
    const [numEnvios, setNumEnvios] = useState(0);

    useEffect(() => {
        document.title = "Nuestro Diario • Escríbeme";
    }, []);

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
        setTimeout(() => {setMexito("normal")}, 3000);
    }

    return (
        <motion.main initial="initial" animate="in" exit="out" variants={variantesPagina}>
            <article>
                <h2>Escríbeme</h2>
                <p>Escríbeme un hermoso mensaje a través del formulario que se presenta más abajo. O si lo prefieres, <Link to="#" onClick={enviarCorreoEnlace}>hazlo con la aplicación de correo de tu ordenador</Link>. Si no se te ocurre nada, puedes intentarlo en otro momento. No hay prisa.</p>
                <img src={require("../imagenes/escribeme.jpeg")} alt={"Escríbeme"} title={"Escríbeme"}/>
                <p>Puedes enviarme una poesía o el relato breve de tus aventuras con los amigos en la bolera de la esquina. Recuerda que la expresión natural nace de forma espontánea. Si tienes que esforzarte demasiado, ya no vale. Así que, ¡no le des vueltas y escríbeme lo que se te pase por la cabeza de una vez por todas!</p>
            </article>
            <form onSubmit={(e) => enviarCorreo(e)}>
                <ul className="ul-form">
                    <li><h3 className="colorgris">Escribe algo…</h3></li>
                    <li><input type="text" className="nombre" name="nombre" placeholder="Tu nombre o apodo *" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" onChange={(e) => setNombre(e.target.value)} value={nombre}/><label>Tu nombre o apodo *</label></li>
                    <li><input type="text" className="email" name="email" placeholder="Tu correo electrónico *" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" onChange={(e) => setCorreo(e.target.value)} value={correo}/><label>Tu correo electrónico *</label></li>
                    <li><textarea className="mensaje" name="mensaje" placeholder="Escribe aquí tu mensaje… *" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" onChange={(e) => setMensaje(e.target.value)} value={mensaje}></textarea><label>Escribe aquí tu mensaje… *</label></li>
                    <li><label className="contenedor-label noetiquetaflotante" htmlFor="privacidad"><input type="checkbox" id="privacidad" className="especial admin" name="privacidad" onChange={() => setPrivacidad(!privacidad)}/><span className="checkmark left-cero"></span><h3 className="displayinline colorgris">Entiendo y acepto la <em><Link to={"/privacidad"}>Política de Privacidad</Link></em>.</h3></label></li>
                    <li className="invisible"><input type="hidden" name="gotcha" onChange={(e) => setGotcha(e.target.value)}/></li>
                    <li><button type="submit">{mexito == "enviado" ? <i className="mdi mdi-button">done</i> : (mexito == "error" ? <i className="mdi mdi-button">close</i> : <span>Enviar</span>)}</button>
                    </li>
                </ul>
            </form>
            <Pie/>
        </motion.main>
    )
}

export default Escribeme;