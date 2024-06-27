import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {variantesPagina, convertirFecha, smartyPants} from "../constantes/constantes";
import Pie from "../componentes/pie";
import axios from "axios";
import {Entrada} from "../modelos/entrada";
import {Comentario} from "../modelos/comentario";
import Markdown from "react-markdown";
import remarkTextr from "remark-textr";
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import {remark} from "remark";
import strip from "strip-markdown";

const Inicio = () => {
    const [entradas, setEntradas] = useState<any[]>([]);
    const [pagina, setPagina] = useState(1);
    const [total, setTotal] = useState(0);

    const cargaMas = async () => {
        try {
            const {data} = await axios.get(process.env.REACT_APP_BASE_URL + "entradas?limite=" + process.env.REACT_APP_ENTRADAS_POR_PAGINA + "&especial=false&pagina=" + pagina);
            setEntradas([...entradas, ...data.datos]);
            setTotal(data.meta.total);
        } catch(e) {
            return(e);
        }
    }

    useEffect(()=> {
        document.title = "Nuestro Diario";
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
                {{
                    const openai = new OpenAI(/*{ apiKey: process.env.REACT_APP_OPENAI, dangerouslyAllowBrowser: true }*/);
                    const speechFile = path.resolve("./voz-" + String(entrada.id) + ".mp3");
                    const crearVoz = async (speechFile: string, str: any) => {
                        const mp3 = await openai.audio.speech.create({
                            model: "tts-1",
                            voice: "echo",
                            input: str,
                        });
                        const buffer = Buffer.from(await mp3.arrayBuffer());
                        await fs.promises.writeFile(speechFile, buffer);
                    }
                    crearVoz(speechFile, String(remark().use(strip).process(entrada.contenido)));
                }}
                return (
                    <article key={index}>
                        <div className="audio">
                            <audio>
                                <source src={"./voz-" + String(entrada.id) + ".mp3"} type={"audio/mpeg"}/>
                                Tu navegador no soporta la etiqueta html audio.
                            </audio>
                        </div>
                        <h2><Link to={"/entrada/" + entrada.id}>{entrada.titulo}</Link></h2>
                        <h3>{convertirFecha(entrada.fecha, true)} • {entrada.total_com === 0 ? "sin comentarios" : (entrada.total_com === 1 ? "1 comentario" : (entrada.total_com + " comentarios"))} • {entrada.visitas === 0 ? "sin visitas" : (entrada.visitas === 1 ? "1 visita" : (entrada.visitas + " visitas"))}</h3>
                        <Markdown
                            remarkPlugins={[[remarkTextr, {plugins: [smartyPants]}]]}>{entrada.contenido}</Markdown>
                        {(entrada.total_com > 0) ? entrada.comentarios.map((comentario: Comentario, index: number) => {
                            return (
                                <div className={"comentario"} key={index}>
                                    <h3>{convertirFecha(comentario.fecha, true)} • {comentario.usuario}</h3>
                                    <Markdown
                                        remarkPlugins={[[remarkTextr, {plugins: [smartyPants]}]]}>{comentario.comentario}</Markdown>
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

export default Inicio;