/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ) { }
}
class Heroe extends PersonaNormal {

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) {
        super(nombreReal, 'New York');
    }

    PrintNombre() {
        console.log(`El héroe se llama ${this.alterEgo}, en la vida real se llama ${this.nombreReal}. Tiene ${this.edad} años.`);
    }

}

const spiderman = new Heroe('Spiderman Negro', 13, 'Miles Morales');

spiderman.PrintNombre();

console.log(spiderman);