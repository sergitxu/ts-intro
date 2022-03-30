/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: String;
    edad: Number;
    direccion: Direccion
    mostrarDireccion: () => void
}

interface Direccion {
    calle: String,
    pais: string,
    ciudad: string
}
const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St.',
        pais: 'USA',
        ciudad: 'New York'
    },
    mostrarDireccion() {
        return (`${this.nombre}, ${this.direccion.calle}, ${this.direccion.ciudad}, ${this.direccion.pais}, `)
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);