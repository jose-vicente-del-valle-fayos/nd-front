import React, {SyntheticEvent, useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import {motion} from "framer-motion";
import {variantesPagina} from "../constantes/constantes";
import axios from "axios";

const Acceso = () => {
    useEffect(() => {
        document.title = "Nuestro Diario · Acceso";
    });
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [redirigir, setRedirigir] = useState(false);
    const ingresar = async (e: SyntheticEvent) => {
        e.preventDefault()
        await axios.post("ingresar", {
            "correo":      correo,
            "contrasena":  contrasena
        });
        setRedirigir(true)
    }
    const salir = async (e: SyntheticEvent) => {
        e.preventDefault()
        await axios.post('http://localhost:8000/api/salir');
    }
    if(redirigir) {
        return <Navigate to={"/administracion"}/>;
    }
    return (
        <motion.main initial="initial" animate="in" exit="out" variants={variantesPagina}>
            <article>
                <h2>Ingresar</h2>
                <p className="sin-margin-bottom">Introduce tu contraseña para entrar.</p>
            </article>
            <form onSubmit={ingresar}>
                <ul className="ul-form">
                    <li><input type="text" className="nombre admin" name="nombre" placeholder="Nombre"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false" onChange={e => setCorreo(e.target.value)}/><label>Nombre</label></li>
                    <li><input type="password" className="contrasena admin" name="contrasena"
                               placeholder="Contraseña" autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false"
                               onChange={e => setContrasena(e.target.value)}/><label>Contraseña</label></li>
                    <li>
                        <button type="submit" className="enviar" value="Iniciar">Iniciar</button>
                    </li>
                </ul>
            </form>
            <article>
                <h2>Salir</h2>
                <p className="sin-margin-bottom">Haz click en el siguiente botón para abandonar el sistema con
                    seguridad.</p>
            </article>
            <form onSubmit={salir}>
                <ul className="ul-form">
                    <li>
                        <button type="submit" className="enviar" value="Salir">Salir</button>
                    </li>
                </ul>
            </form>
        </motion.main>
    );
}

export default Acceso;