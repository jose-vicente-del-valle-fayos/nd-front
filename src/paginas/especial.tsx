import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {entradasPorPagina, variantesPagina, baseURL, convertirFecha, smartypants} from "../constantes/constantes";
import Pie from "../componentes/pie";
import axios from "axios";
import {Entrada} from "../modelos/entrada";
import {Comentario} from "../modelos/comentario";
import Markdown from "react-markdown";
import remarkTextr from "remark-textr";

const Especial = () => {
    const [entradas, setEntradas] = useState<any[]>([]);
    const [pagina, setPagina] = useState(1);
    const [total, setTotal] = useState(0);

    const cargaMas = async () => {
        try {
            const {data} = await axios.get(baseURL + "entradas?limite=" + entradasPorPagina + "&especial=true&pagina=" + pagina);
            setEntradas([...entradas, ...data.datos]);
            setTotal(data.meta.total);
        } catch(e) {
            return(e);
        }
    }

    useEffect(() => {
        document.title = "Nuestro Diario • Especial";
        cargaMas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pagina]);

    const incrementa = () => {
        let n: number = pagina + 1;
        setPagina(n);
    }

    return (
        <motion.main initial="initial" animate="in" exit="out" variants={variantesPagina}>
            {(entradas && (entradas.length > 0)) ? entradas.map((entrada: Entrada, index: number) => {
                return (
                    <article key={index}>
                        <h2><Link to={"/entrada/" + entrada.id}>{entrada.titulo}</Link></h2>
                        <h3>{convertirFecha(entrada.fecha, true)} • {entrada.total_com === 0 ? "sin comentarios" : (entrada.total_com === 1 ? "1 comentario" : (entrada.total_com + " comentarios"))} • {entrada.visitas === 0 ? "sin visitas" : (entrada.visitas === 1 ? "1 visita" : (entrada.visitas + " visitas"))}</h3>
                        <Markdown remarkPlugins={[[remarkTextr, {plugins: [smartypants]}]]}>{entrada.contenido}</Markdown>
                        {(entrada.total_com > 0) ? entrada.comentarios.map((comentario: Comentario, index: number) => {
                            return (
                                <div className={"comentario"} key={index}>
                                    <h3>{convertirFecha(comentario.fecha, true)} • {comentario.usuario}</h3>
                                    <Markdown remarkPlugins={[[remarkTextr, {plugins: [smartypants]}]]}>{comentario.comentario}</Markdown>
                                </div>
                            );
                        }) : ""}
                    </article>
                );
            }) : ""}
            {(entradas && (entradas.length > 0) && (entradas.length < total)) ?
                <button onClick={incrementa} className={"enviar boton-muy-largo"}
                        value="Ver más…">Ver más…
                </button> : "" }
            <Pie/>
        </motion.main>
    )
}

export default Especial;