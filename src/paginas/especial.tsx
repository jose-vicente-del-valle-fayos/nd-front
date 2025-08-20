import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {convertirFecha, smartyPants, registrarVisita, verificarVisitas} from "../constantes/constantes";
import Pie from "../componentes/pie";
import Voz from "../componentes/voz";
import Audio from "../componentes/audio";
import Portapapeles from '../componentes/portapapeles';
import axios from "axios";
import {Entrada} from "../modelos/entrada";
import {Comentario} from "../modelos/comentario";
import Markdown from "react-markdown";
import remarkTextr from "remark-textr";
import {Helmet} from "react-helmet-async";

const Especial = () => {
    const [entradas, setEntradas] = useState<any[]>([]);
    const [pagina, setPagina] = useState(1);
    const [total, setTotal] = useState(0);

    const cargaMas = async () => {
        try {
            const {data} = await axios.get(process.env.REACT_APP_BASE_URL + "entradas?limite=" + process.env.REACT_APP_ENTRADAS_POR_PAGINA + "&especial=true&pagina=" + pagina);
            setEntradas([...entradas, ...data.datos]);
            setTotal(data.meta.total);
        } catch(e) {
            return(e);
        }
    }

    useEffect(() => {
        cargaMas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pagina]);

    useEffect(() => {
        if (entradas.length > 0) {
            entradas.forEach((e) => registrarVisita(e.id).then(() => {}));
        }
        const interval = setInterval(() => verificarVisitas(entradas.map(entrada => ({ id: entrada.id }))), 500);
        return () => clearInterval(interval);
    }, [entradas]);

    const incrementa = () => {
        let n: number = pagina + 1;
        setPagina(n);
    }

    return (
        <main className={"fade-in"}>
            <Helmet>
                <title>Nuestro Diario • Especial</title>
                <meta name="description"
                      content={"Y no se me ocurre mejor plan que disfrutar las pequeñas cosas, pues en ellas está la clave de una vida bien aprovechada."}/>
                <meta property="og:title" content={"Nuestro Diario • Especial"}/>
                <meta property="og:description"
                      content={"Y no se me ocurre mejor plan que disfrutar las pequeñas cosas, pues en ellas está la clave de una vida bien aprovechada."}/>
                <meta property="og:site_name" content="Nuestro Diario"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={"https://" + String(process.env.REACT_APP_DOMINIO_PERMITIDO)}/>
            </Helmet>
            {(entradas && (entradas.length > 0)) ? entradas.map((entrada: Entrada, index: number) => {
                return (
                    <article key={index}>
                        <h2><Link to={"/entrada/" + entrada.id}>{entrada.titulo}</Link></h2>
                        <h3>{convertirFecha(entrada.fecha, true)} • {entrada.visitas === 0 ? "sin visitas" : (entrada.visitas === 1 ? "1 visita" : (entrada.visitas.toLocaleString("es-ES") + " visitas"))}<span className={"alineado-derecha"}><Voz
                            texto={entrada.titulo + ". " + convertirFecha(entrada.fecha, false) + ". " + entrada.contenido}/><Portapapeles
                            url={"https://nuestrodiario.es/entrada/" + entrada.id}/></span></h3>
                        <Markdown remarkPlugins={[[remarkTextr, {plugins: [smartyPants]}]]}>{entrada.contenido}</Markdown>
                        {(entrada.imagen !== "sin-imagen" && ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"].includes(entrada.imagen.split('.').pop())) ? <img alt={entrada.titulo} src={entrada.imagen}/> : null}
                        {(entrada.imagen !== "sin-imagen" && ["mp3", "MP3"].includes(entrada.imagen.split('.').pop())) ? <Audio src={entrada.imagen} /> : null}
                        {(entrada.total_com > 0) ? entrada.comentarios.map((comentario: Comentario, index: number) => {
                            return (
                                <div className={"comentario"} key={index}>
                                    <h3>{convertirFecha(comentario.fecha, true)} • {comentario.usuario}</h3>
                                    <Markdown
                                        remarkPlugins={[[remarkTextr, {plugins: [smartyPants]}]]}>{comentario.comentario}</Markdown>
                                </div>
                            );
                        }) : null}
                    </article>
                );
            }) : null}
            {(entradas && (entradas.length > 0) && (entradas.length < total)) ?
                <button onClick={incrementa} className={"enviar boton-muy-largo"}
                        value="Ver más…">Ver más…
                </button> : null }
            <Pie/>
        </main>
    )
}

export default Especial;