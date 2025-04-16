import axios from "axios";

export const enviarCorreoEnlace = () => {
    window.open("mailto:" + process.env.REACT_APP_CORREO_DESTINO);
};

export const convertirFecha = (str: string, short: boolean) => {
    let d = new Date(str);
    if(short) {
        let f1 = d.toLocaleDateString("es-ES", {year: "numeric", month: "short", day: "numeric"});
        let p1:string[] = f1.split(" ");
        let h = d.getHours().toString();
        let m = d.getMinutes().toString().padStart(2, "0");
        return `${p1[1]} ${p1[0]}, ${p1[2]} ${h}:${m}`;
    } else {
        let f2:string = d.toLocaleDateString("es-ES", {year: "numeric", month: "long", day: "numeric"});
        let p2:string[] = f2.split(" de ");
        let h = d.getHours().toString();
        let m = d.getMinutes().toString().padStart(2, "0");
        return `${p2[1]} ${p2[0]}, ${p2[2]} ${h}:${m}`;
    }
};

export const anoActual = (): string => {
    return new Date().toLocaleDateString('es-ES').slice(-4);
}

export const smartyPants = (input: string) => {
    const ellipsisReplaced: string = input.replace(/\.\.\./g, "…");
    const emDashReplaced: string = ellipsisReplaced.replace(/---/g, "—");
    const enDashReplaced: string = emDashReplaced.replace(/--/g, "–");
    return enDashReplaced.replace(/"([^"]*)"/g, "“$1”"); // curlyQuotesReplaced
}

export const registrarVisita = async (id: number) => {
    const visitas = JSON.parse(localStorage.getItem("nd-v") || "{}");
    const ultimaVisita = visitas[id];
    const ahora = new Date();
    const haceUnAno = new Date();
    haceUnAno.setFullYear(haceUnAno.getFullYear() - 1);
    if (!ultimaVisita || new Date(ultimaVisita) < haceUnAno) {
        visitas[id] = ahora.toISOString();
        sessionStorage.setItem("nd-v", JSON.stringify(visitas));
        localStorage.setItem("nd-v", JSON.stringify(visitas));
        try {
            await axios.post(process.env.REACT_APP_BASE_URL + "visita/" + String(id));
        } catch (e) {
            console.error("error al registrar visita: ", e);
        }
    }
}

export const verificarVisitas = async (entradas: { id: number }[]) => {
    const localData = JSON.parse(localStorage.getItem("nd-v") || "{}");
    const sessionData = JSON.parse(sessionStorage.getItem("nd-v") || "{}");
    const visitasRecuperadas = { ...sessionData, ...localData };
    if (!localStorage.getItem("nd-v")) {
        localStorage.setItem("nd-v", JSON.stringify(visitasRecuperadas));
    }
    for (const entrada of entradas) {
        if (!visitasRecuperadas[entrada.id]) {
            visitasRecuperadas[entrada.id] = new Date().toISOString();
        }
    }
    sessionStorage.setItem("nd-v", JSON.stringify(visitasRecuperadas));
    localStorage.setItem("nd-v", JSON.stringify(visitasRecuperadas));
}