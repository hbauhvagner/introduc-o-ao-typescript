"use strict";
const person = {
    name: 'Mariana',
    age: 28,
    profession: 'desenvolvedora'
};
person.age = 25;
const andre = {
    name: 'Andre',
    age: 25,
    profession: 'pintor'
};
const paula = {
    name: 'Paula',
    age: 25,
    profession: 'Desenvolvedora'
};
var Profession;
(function (Profession) {
    Profession[Profession["Professora"] = 0] = "Professora";
    Profession[Profession["Atriz"] = 1] = "Atriz";
    Profession[Profession["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profession[Profession["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profession || (Profession = {}));
const vanessa = {
    name: 'Vanessa',
    age: 23,
    profession: Profession.Desenvolvedora
};
const maria = {
    name: 'Maria',
    age: 23,
    profession: Profession.Desenvolvedora
};
const jessica = {
    name: 'Jessica',
    age: 28,
    profession: Profession.Desenvolvedora,
    materials: ['Matemática discreta', 'Programação']
};
const monica = {
    name: 'Monica',
    age: 28,
    materials: ['Matemática discreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materials);
