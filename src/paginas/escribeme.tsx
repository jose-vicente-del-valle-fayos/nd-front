import React, {SyntheticEvent, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {epEscribeme, variantesPagina, baseURL} from "../constantes/constantes";
import Pie from "../componentes/pie";
import axios from "axios";

const Escribeme = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [gotcha, setGotcha] = useState("");
    const [mexito, setMexito] = useState(false);

    useEffect(() => {
        document.title = "Nuestro Diario · Escríbeme";
    }, []);

    const enviarCorreo = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            let nuevoCorreo = {
                nombre: nombre,
                correo: correo,
                mensaje: mensaje,
                gotcha: gotcha
            };
            console.log(nuevoCorreo)
            if(!nuevoCorreo.gotcha) {
                await axios.post(baseURL + epEscribeme, nuevoCorreo);
                setMexito(true);
            }
        } catch (e) {
            console.log(e);
        }
    }

    if(mexito) {
        setTimeout(() => {setMexito(false)}, 3000);
    }

    return (
        <motion.main initial="initial" animate="in" exit="out" variants={variantesPagina}>
            <article>
                <h2>Escríbeme</h2>
                <p>Rellena el siguiente formulario para enviarme un mensaje y di cosas hermosas que me alegren el corazón. Si no se te ocurre nada, puedes intentarlo en otro momento. No hay prisa.</p>
                <img src={require("../imagenes/escribeme.jpeg")} alt={"Escríbeme"} title={"Escríbeme"}/>
                <p className="sin-margin-bottom">También puedes escribirme una poesía o el relato breve de tus aventuras con los amigos en la bolera de la esquina. Recuerda que la expresión natural nace de forma espontánea. Si tienes que esforzarte demasiado, ya no vale. Así que, ¡no le des vueltas y escríbeme lo que se te pase por la cabeza de una vez por todas!</p>
            </article>
            <form onSubmit={(e) => enviarCorreo(e)}>
                <ul className="ul-form">
                    <li><h3 className="colorgris">Escribe algo…</h3></li>
                    <li><input type="text" className="nombre" name="nombre" placeholder="Tu nombre o apodo *" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" onChange={(e) => setNombre(e.target.value)}/><label>Tu nombre o apodo *</label></li>
                    <li><input type="text" className="email" name="email" placeholder="Tu correo electrónico *" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" onChange={(e) => setCorreo(e.target.value)}/><label>Tu correo electrónico *</label></li>
                    <li><textarea className="mensaje" name="mensaje" placeholder="Escribe aquí tu mensaje… *" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" onChange={(e) => setMensaje(e.target.value)}></textarea><label>Escribe aquí tu mensaje… *</label></li>
                    <li><label className="contenedor-label noetiquetaflotante" htmlFor="privacidad"><input type="checkbox" id="privacidad" className="especial admin" name="privacidad"/><span className="checkmark left-cero"></span><h3 className="displayinline colorgris">Entiendo y acepto la <em><Link to={"/privacidad"}>Política de Privacidad</Link></em>.</h3></label></li>
                    <li className="invisible"><input type="hidden" name="gotcha" onChange={(e) => setGotcha(e.target.value)}/></li>
                    <li><button type="submit">{mexito ? <i className="mdi mdi-button">done</i> : <span>Enviar</span>}</button>
                    </li>
                </ul>
            </form>
            <Pie/>
        </motion.main>
    )
}

export default Escribeme;