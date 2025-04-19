import React, {useState} from "react";
import removeMarkdown from "markdown-to-text";

const Voz = (props: any) => {

    const [hablando, setHablando] = useState(false);

    const cambiaHablarParar = () => {
        if (hablando) {
            window.speechSynthesis.cancel();
            setHablando(false);
        } else {
            const utterance = new SpeechSynthesisUtterance();
            utterance.text = removeMarkdown(props.texto);
            utterance.lang = "es-ES";
            utterance.onend = () => { setHablando(false); };
            window.speechSynthesis.speak(utterance);
            setHablando(true);
        }
    };

    return (
        <a onClick={cambiaHablarParar} title={"Leer"}>{hablando ? <i className={"mdi"}>stop</i> : <i className={"mdi"}>play_arrow</i>}</a>
    );
};

export default Voz;