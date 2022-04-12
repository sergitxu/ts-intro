/*
    ===== Código de TypeScript =====
*/


function ClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@ClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'patata';
    imprimir() {
        console.log('Hola, Mundo');
    }
}


console.log(MiSuperClase);

const miClase = new MiSuperClase();
console.log(miClase);