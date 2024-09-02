import React from "react";
import removeMarkdown from "markdown-to-text";

const Voz = (props: any) => {

    const hablar = () => {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
            let utterance = new SpeechSynthesisUtterance();
            utterance.text = removeMarkdown(props.texto);
            utterance.lang = "es-ES";
            window.speechSynthesis.speak(utterance);
        } else {
            // console.log('Tu navegador no soporta la síntesis de voz.');
        }
    };

    const parar = () => {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        } else {
            // console.log('Tu navegador no soporta la síntesis de voz.');
        }
    };

    return (
        <span className="alineado-derecha"><a onClick={hablar}><i className="mdi">play_arrow</i></a><a onClick={parar}><i
            className="mdi">stop</i></a></span>
    );
};

export default Voz;