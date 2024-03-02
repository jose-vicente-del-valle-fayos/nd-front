import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {variantesPagina, baseURL} from "../constantes/constantes";
import Pie from "../componentes/pie";
import axios from "axios";
import {Entrada} from "../modelos/entrada";

const Archivo = () => {
    const [entradas, setEntradas] = useState<any[]>([]);
    const [entini, setEntini] = useState<any[]>([]);

    useEffect(() => {
        document.title = "Nuestro Diario · Archivo";
        (
            async () => {
                try {
                    const {data} = await axios.get(baseURL + "todas");
                    setEntradas(data.datos);
                    setEntini(data.datos);
                } catch(e) {
                    return(e);
                }
            }
        )();
    });

    const encontrar = (palabra: string) => {
        if(palabra) {
            let entFilt = entini.current.filter(e => {
                return e.fecha.includes(palabra) ||
                    e.titulo.includes(palabra) ||
                    e.usuario.includes(palabra) ||
                    e.contenido.includes(palabra);
            });
            setEntradas(entFilt);
        } else {
            setEntradas(entini);
        }
    }

    return (
        <motion.main initial="initial" animate="in" exit="out" variants={variantesPagina}>
            <article>
                <h2>Archivo</h2>
                <p>Aquí se encuentran archivadas todas las entradas de Nuestro Diario. Si buscas una entrada en particular y no la encuentras, no busques más porque <em>seguramente la he borrado</em>.</p>
            </article>
            <form id="formEncontrar" onSubmit={e => e.preventDefault()} /*className="formEncontrar"*/ >
                <ul className="ul-form">
                    <li className="izquierda"><input type="text" onChange={e => encontrar(e.target.value)} className="encontrar" name="encontrar" placeholder="Escribe aquí…"/><label>Escribe aquí…</label></li>
                </ul>
            </form>
            <article>
                <p id="enumArchivo" className="sin-margin-bottom">
                    {(entradas && (entradas.length > 0)) ? entradas.map((entrada: Entrada, index: number) => {
                        return(
                            <Link to={"/entrada/" + entrada.id} className={"sin-subrayar"} key={index}>{entrada.fecha} · {entrada.titulo}<br/></Link>
                        );
                    }) : "" }
                    </p>
            </article>
            <Pie/>
        </motion.main>
    )
}

export default Archivo;