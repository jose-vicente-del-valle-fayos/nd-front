import React from "react";
import {Link} from "react-router-dom";
import Pie from "../componentes/pie";
import {Helmet} from "react-helmet-async";

const Error = () => {
    return (
        <main className={"fade-in"}>
            <Helmet>
                <title>Nuestro Diario • Error</title>
                <meta name="description" content={"Error en Nuestro Diario."}/>
                <meta property="og:title" content={"Nuestro Diario • Error"}/>
                <meta property="og:description" content={"Error en Nuestro Diario."}/>
                <meta property="og:site_name" content="Nuestro Diario"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://" + String(process.env.REACT_APP_DOMINIO_PERMITIDO)}/>
            </Helmet>
            <article>
                <h2>Error 404</h2>
                <p><strong>Estás buscando una página que no existe</strong>. También puede ser hayas encontrado —en
                    algún buscador o en alguna red social— <strong>un enlace entrante que pertenezca a una versión
                        anterior de Nuestro Diario</strong>, donde las entradas se identificaban de otra manera. No descartes tampoco que haya borrado el contenido que buscas.</p>
                <p>Si estás decidido a encontrar ese contenido, quizá puedas acceder a él desde la sección de <Link to={"/archivo"}>archivo</Link>, donde se publica una lista con todas las entradas de Nuestro Diario.</p>
                <p>Si estás experimentando otro problema, puedes <Link to={"/escribame"}>escribirme un mensaje</Link>, indicando todos los detalles de tu consulta. O puedes volver a la <Link to={"/"}>página de inicio</Link> y leer otra cosa…</p>
                <img src={require("../imagenes/error.jpg")} alt={"Pepe"} title={"Pepe"}/>
            </article>
            <Pie/>
        </main>
    )
}

export default Error;