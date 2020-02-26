import Ingrediente from "./Ingrediente.js";

export default class Receta {
    /**
     * 
     * @param {String} nombre 
     * @param {String} autor 
     * @param {Ingrediente[]} ingredientes 
     */
    constructor(nombre, autor, ingredientes = []) {
        this.nombre = nombre;
        this.autor = autor;
        this.ingredientes = ingredientes;
    }
    getNumeroIngredientes = _ => this.ingredientes.length;

    getCosto = _ => {
        let costo = 0;

        this.ingredientes.forEach(i => costo += i.costo);

        return costo;
    }

    imprimirEnConsola = _ => {
        console.log(this.nombre, 'Autor:' + this.autor);
        this.ingredientes.forEach(ingrediente => console.log(ingrediente.getDescripcion()));
    }

    agregarIngrdiente = ingrediente => this.ingredientes.push(ingrediente);
}