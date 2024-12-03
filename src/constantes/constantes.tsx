export const variantesPagina = {
    initial: { opacity: 0, transition: { duration: 0.3, delay: 0.3 } },
    in: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
    out: { opacity: 0, transition: { duration: 0.3, delay: 0.3 } }
};

export const enviarCorreoEnlace = () => {
    window.open("mailto:" + process.env.REACT_APP_CORREO_DESTINO);
};

export const convertirFecha = (str: string, short: boolean) => {
    if(short) {
        return new Date(str).toLocaleDateString("es-ES", {year: "numeric", month: "short", day: "numeric"});
    } else {
        return new Date(str).toLocaleDateString("es-ES", {year: "numeric", month: "long", day: "numeric"});
    }
};

export const anoActual = (): string => {
    return new Date().toLocaleDateString('es-ES').slice(-4);
}

export const smartyPants = (input: string) => {
    const ellipsisReplaced: string = input.replace(/\.\.\./g, "…");
    const emDashReplaced: string = ellipsisReplaced.replace(/---/g, "—");
    const enDashReplaced: string = emDashReplaced.replace(/--/g, "–");
    const curlyQuotesReplaced: string = enDashReplaced.replace(/"([^"]*)"/g, "“$1”");
    return curlyQuotesReplaced;
}