/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anyo: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Under the bridge',
    detalles: {
        autor: 'Red Hot Chili Peppers',
        anyo: 1989
    }
}

// desestructuración del objeto
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor: autorDetalle } = detalles; // autorDetalle es el nombre de la variable

const autor: String = 'The Beatles';

// Alternativa menos legible:
// const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;


console.log(`El volumen actual es: ${volumen}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`La canción es: ${cancion}`);
console.log(`El autor es: ${autorDetalle}`);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3] = dbz; // desestructuración del Array

console.log(`Personaje1: ${p1}, Personaje2: ${p2}, Personaje3: ${p3}, `)
