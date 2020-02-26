export default class Cantidad {
    /**
     * 
     * @param {Number} valor 
     * @param {String} unidad 
     */
    constructor(valor, unidad) {
        this.valor = valor;
        this.unidad = unidad;
    }
    getDescripcion = _ => `${this.valor} ${this.unidad}`;
}