import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {convertirFecha} from "../constantes/constantes";
import Pie from "../componentes/pie";
import axios from "axios";
import {Entrada} from "../modelos/entrada";
import {Helmet} from "react-helmet-async";

const Archivo = () => {
    const [entradas, setEntradas] = useState<any[]>([]);
    const entini = useRef<any[]>([]);
    const cargado  = useRef(false);

    useEffect(() => {
        (
            async () => {
                try {
                    const {data} = await axios.get(process.env.REACT_APP_BASE_URL + "todas");
                    entini.current = data.datos;
                    if(!cargado.current) {
                        setEntradas(data.datos)
                        cargado.current = true;
                    }
                } catch(e) {
                    return(e);
                }
            }
        )();
    });

    const normalizar = (t: string) =>
        t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const encontrar = (palabra: string) => {
        if (palabra) {
            let palabraNormalizada = normalizar(palabra);
            let entFilt = entini.current.filter(ent => {
                return normalizar(ent.fecha).includes(palabraNormalizada) ||
                    normalizar(ent.titulo).includes(palabraNormalizada) ||
                    normalizar(ent.contenido).includes(palabraNormalizada);
            });
            setEntradas(entFilt);
        } else {
            setEntradas(entini.current);
        }
    };

    return (
        <main className={"fade-in"}>
            <Helmet>
                <title>Nuestro Diario • Archivo</title>
                <meta name="description" content={"Todas las entradas de Nuestro Diario."}/>
                <meta property="og:title" content={"Nuestro Diario • Archivo"}/>
                <meta property="og:description" content={"Todas las entradas de Nuestro Diario."}/>
                <meta property="og:site_name" content="Nuestro Diario"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://" + String(process.env.REACT_APP_DOMINIO_PERMITIDO)}/>
            </Helmet>
            <article>
                <h2>Archivo</h2>
                <p className={"sin-margin-bottom"}>Aquí se encuentran archivadas todas las entradas de Nuestro
                    Diario. <strong>Escribe en el campo de búsqueda los términos que quieras encontrar</strong>. También
                    puedes seleccionar entradas por fecha y hora, en formato <strong>AAAA-MM-DD HH:MM</strong>.</p>
            </article>
            <form id="formEncontrar" onSubmit={e => e.preventDefault()}>
                <ul className={"ul-form"}>
                    <li className={"izquierda"}><input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" onChange={e => encontrar(e.target.value)} className={"encontrar"} name="encontrar" placeholder="Buscar…"/><label>Buscar…</label></li>
                </ul>
            </form>
            <article>
                <p id="enumArchivo" className={"sin-margin-bottom"}>
                    {(entradas && (entradas.length > 0)) ? entradas.map((entrada: Entrada, index: number) => {
                        return(
                            <span>{convertirFecha(entrada.fecha, false)} • <Link to={"/entrada/" + entrada.id} className={"sin-subrayar"} key={index}>{entrada.titulo}<br/></Link></span>
                        );
                    }) : null }</p>
            </article>
            <Pie/>
        </main>
    )
}

export default Archivo;