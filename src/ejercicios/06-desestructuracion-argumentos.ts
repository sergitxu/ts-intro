/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tablet: Producto = {
    desc: 'iPad Air',
    precio: 350
}

export function calculaIVA(productos: Producto[]): [number, number, number] {
    let bruto = 0;

    productos.forEach(({ precio }) => { // No hace falta poner producto.precio sino {precio} con llaves
        bruto += precio;
    });
    let IVA = bruto * 0.16;
    let neto = bruto + IVA;
    return [bruto, IVA, neto];
}

// const cesta = [telefono, tablet]
// const [precioBruto, IVA, precioNeto] = calculaIVA(cesta);
// console.log(`Precio bruto: ${precioBruto}€, IVA : ${IVA}€, Precio neto : ${precioNeto}€`);
