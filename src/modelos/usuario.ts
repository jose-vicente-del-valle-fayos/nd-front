export class Usuario {
    constructor(
        public id = 0,
        public sobrenombre = "",
        public nombre = "",
        public apellidos = "",
        public correo = "",
        public entradas = "",
        public total_ent = 0,
    ){
    }
    get nombreCompleto(): string {
        return this.nombre + " " + this.apellidos;
    }
}