import Cantidad from "./Cantidad.js";

export default class Ingrediente {
    /**
     * 
     * @param {Cantidad} cantidad 
     * @param {String} nombre 
     * @param {Number} costo 
     */
    constructor(cantidad, nombre, costo) {
        this.cantidad = cantidad;
        this.nombre = nombre;
        this.costo = costo;
    }
    getDescripcion = _ => `${this.cantidad.getDescripcion()} de ${this.nombre} ($${this.costo})`;
}