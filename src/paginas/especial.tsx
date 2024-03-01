import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {entradasPorPagina, variantesPagina} from "../constantes/constantes";
import Pie from "../componentes/pie";
import axios from "axios";
import {Entrada} from "../modelos/entrada";
import {Comentario} from "../modelos/comentario";

const Especial = () => {
    const [entradas, setEntradas] = useState<any[]>([]);
    const [pagina, setPagina] = useState(1);
    const [total, setTotal] = useState(0);

    const cargaMas = async () => {
        const {data} = await axios.get("entradas?limite=" + entradasPorPagina + "&especial=true&pagina=" + pagina);
        setEntradas([...entradas, ...data.datos]);
        setTotal(data.meta.total);
    }

    useEffect(() => {
        document.title = "Nuestro Diario · Especial";
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
                        <h3>{entrada.fecha} · {entrada.total_com === 0 ? "sin comentarios" : (entrada.total_com === 1 ? "1 comentario" : (entrada.total_com + " comentarios"))}<span
                            className="alineado-derecha"><Link to={"/entrada/" + entrada.id} title="Copiar enlace"><i
                            className="mdi">link</i></Link></span></h3>
                        <div dangerouslySetInnerHTML={{__html: entrada.contenido}}/>
                        {(entrada.total_com > 0) ? entrada.comentarios.map((comentario: Comentario, index: number) => {
                            return (
                                <div className={"comentario"} key={index}>
                                    <h3>{comentario.fecha} · {comentario.usuario}</h3>
                                    <div dangerouslySetInnerHTML={{__html: comentario.comentario}}/>
                                </div>
                            );
                        }) : ""}
                    </article>
                );
            }) : ""}
            {(entradas && (entradas.length > 0) && (entradas.length < total)) ?
                <button onClick={incrementa} className={"enviar boton-largo"}
                        value="Ver más…">Ver más…
                </button> : "" }
            <Pie/>
        </motion.main>
    )
}

export default Especial;