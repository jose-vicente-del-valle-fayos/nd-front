import React, {SyntheticEvent, useState} from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";
import {Helmet} from "react-helmet-async";

const Acceso = () => {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [redirigir, setRedirigir] = useState(false);
    const [iexito, setIexito] = useState(false);
    const [sexito, setSexito] = useState(false);

    const ingresar = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            await axios.post(process.env.REACT_APP_BASE_URL + "ingresar", {
                "correo": correo,
                "contrasena": contrasena
            });
            setIexito(true);
            setRedirigir(true);
        } catch(e) {
            return(e);
        }
    }
    const salir = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            setSexito(true);
            await axios.post(process.env.REACT_APP_BASE_URL + "salir");
        } catch(e) {
            return(e);
        }
    }
    if(redirigir) {
        return <Navigate to={"/administracion"}/>;
    }
    if(iexito) {
        setTimeout(() => {setIexito(false)}, 2000);
    }
    if(sexito) {
        setTimeout(() => {setSexito(false)}, 2000);
    }
    return (
        <main className={"fade-in"}>
            <Helmet>
                <title>Nuestro Diario • Acceso</title>
                <meta name="description" content={"Acceso a Nuestro Diario."}/>
                <meta property="og:title" content={"Nuestro Diario • Acceso"}/>
                <meta property="og:description" content={"Acceso a Nuestro Diario."}/>
                <meta property="og:site_name" content="Nuestro Diario"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://" + String(process.env.REACT_APP_DOMINIO_PERMITIDO)}/>
            </Helmet>
            <article>
                <h2>Ingresar</h2>
                <p className={"sin-margin-bottom"}>Introduce tu contraseña para entrar.</p>
            </article>
            <form onSubmit={ingresar}>
                <ul className={"ul-form"}>
                <li><input type="text" className={"nombre admin"} name="nombre" placeholder="Nombre"
                               autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false" onChange={e => setCorreo(e.target.value)}/><label>Nombre</label></li>
                    <li><input type="password" className={"contrasena admin"} name="contrasena"
                               placeholder="Contraseña" autoComplete="off" autoCorrect="off" autoCapitalize="off"
                               spellCheck="false"
                               onChange={e => setContrasena(e.target.value)}/><label>Contraseña</label></li>
                    <li>
                        <button type="submit" className={"enviar boton-largo"} value="Iniciar">
                            {iexito ? <i className={"mdi mdi-button"}>done</i> : <span>Ingresar</span>}
                        </button>
                    </li>
                </ul>
            </form>
            <article>
                <h2>Salir</h2>
                <p className={"sin-margin-bottom"}>Haz click en el siguiente botón para abandonar el sistema con
                    seguridad.</p>
            </article>
            <form onSubmit={salir}>
                <ul className={"ul-form"}>
                    <li>
                        <button type="submit" className={"enviar"} value="Salir">
                            {sexito ? <i className={"mdi mdi-button"}>done</i> : <span>Salir</span>}
                        </button>
                    </li>
                </ul>
            </form>
        </main>
    );
}

export default Acceso;