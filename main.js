import Cantidad from "./modules/Cantidad.js";
import Ingrediente from "./modules/Ingrediente.js";
import Receta from "./modules/Receta.js";

const ingredientes = [
    new Ingrediente(new Cantidad(200, 'gramos'), 'Carne Picada', 28.8),
    new Ingrediente(new Cantidad(1, 'pieza'), 'Puerro', 17.70),
    new Ingrediente(new Cantidad(3, 'piezas'), 'Zanahorias', 10.14)
];
const rollitosPrimavera = new Receta('Rollitos Primavera', 'El Español', ingredientes);

console.log(rollitosPrimavera.getNumeroIngredientes());
console.log(rollitosPrimavera.getCosto());
rollitosPrimavera.imprimirEnConsola();
rollitosPrimavera.agregarIngrdiente(
    new Ingrediente(new Cantidad(250, 'gramos'), 'Col', 4.725));
rollitosPrimavera.imprimirEnConsola();