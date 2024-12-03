import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {variantesPagina} from "../constantes/constantes";
import Pie from "../componentes/pie";

const Error = () => {
    useEffect(() => {
        document.title = "Nuestro Diario • Error";
    }, []);
    return (
        <motion.main initial="initial" animate="in" exit="out" variants={variantesPagina}>
            <article>
                <h2>Error 404</h2>
                <p><strong>Estás buscando una página que no existe</strong>. También puede ser hayas encontrado —en algún buscador o en alguna red social— <strong>un enlace entrante que pertenezca a una versión anterior de Nuestro Diario</strong>, donde las entradas se identificaban de otra manera. No descartes tampoco que haya borrado el contenido que buscas.</p>
                <p>Si estás decidido a encontrar ese contenido, quizá puedas acceder a él desde la sección de <Link to={"/archivo"}>archivo</Link>, donde se publica una lista con todas las entradas de Nuestro Diario.</p>
                <p>Si estás experimentando otro problema, puedes <Link to={"/escribeme"}>escribirme un mensaje</Link>, indicando todos los detalles de tu consulta. O puedes volver a la <Link to={"/"}>página de inicio</Link> y leer otra cosa…</p>
                <img src={require("../imagenes/error.jpg")} alt={"Pepe"} title={"Pepe"}/>
            </article>
            <Pie/>
        </motion.main>
    )
}

export default Error;