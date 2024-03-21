export const variantesPagina = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0}
};

export const enviarCorreo = () => {
    window.open("mailto:" + correoDestino);
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
    const curlyQuotesReplaced: string = emDashReplaced.replace(/"([^"]*)"/g, "“$1”");
    return curlyQuotesReplaced;
}

export const baseURL = "https://api.nuestrodiario.es/"; // String(process.env.BASE_URL_BACK);

export const entradasPorPagina: number = 5; // Number(process.env.ENT_POR_PAG);
export const epEscribeme: string = "KzQ987h29KkYem"; // String(process.env.RUTA_ESC); // endpoint de escríbeme
export const correoDestino: string = "musheres.dioxinas.0p@icloud.com"; // String(process.env.CORREO_DEST);