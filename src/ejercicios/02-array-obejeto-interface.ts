/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

habilidades.push('popo');

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 10,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Mi pueblico';

console.table(personaje);
