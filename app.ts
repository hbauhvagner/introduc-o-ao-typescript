const person = {
    name: 'Mariana',
    age: 28,
    profession: 'desenvolvedora'
}

person.age = 25;

const andre: {name: string, age: number, profession: string} = {
    name: 'Andre',
    age: 25,
    profession: 'pintor'
}

const paula: {name: string, age: number, profession: string} = {
    name: 'Paula',
    age: 25,
    profession: 'Desenvolvedora'
}

enum Profession {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Person {
    name: string;
    age: number;
    profession?: Profession;
}

interface Students extends Person {
    materials: string[];
}

const vanessa: Person = {
    name: 'Vanessa',
    age: 23,
    profession: Profession.Desenvolvedora
}

const maria: Person = {
    name: 'Maria',
    age: 23,
    profession: Profession.Desenvolvedora
}

const jessica: Students = {
    name: 'Jessica',
    age: 28,
    profession: Profession.Desenvolvedora,
    materials: ['Matemática discreta', 'Programação']
}

const monica: Students = {
    name: 'Monica',
    age: 28,
    materials: ['Matemática discreta', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materials);