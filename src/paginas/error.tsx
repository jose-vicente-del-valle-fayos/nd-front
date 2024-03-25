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
                <p>Estás buscando una página que no existe o estás intentando acceder sin permiso. Si estás experimentando otro problema, puedes <Link to={"/escribeme"}>contactar conmigo</Link> o volver a la <Link to={"/"}>página de inicio</Link>.</p>
                <p>Si te animas a <Link to={"/escribeme"}>escribirme</Link>, no olvides indicar todos los detalles de tu consulta.</p>
            </article>
            <Pie/>
        </motion.main>
    )
}

export default Error;