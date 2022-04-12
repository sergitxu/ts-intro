/*
    ===== Código de TypeScript =====
*/
import { calculaIVA, Producto } from "./06-desestructuracion-argumentos";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 200
    }
]

const [precioBruto, IVA, precioNeto] = calculaIVA(carritoCompras);
console.log(`Precio bruto: ${precioBruto}€, IVA : ${IVA}€, Precio neto : ${precioNeto}€`);
