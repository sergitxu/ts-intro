/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2) {
    return numero * base;
}

const resultado = multiplicar(5, 10, 3);

console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    puntosVida: number;
    mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, puntosCurar: number): void {
    personaje.puntosVida += puntosCurar;

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Gandalf",
    puntosVida: 80,
    mostrarHP() {
        console.log(`Puntos de vida de ${this.nombre}: ${this.puntosVida}`);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();