/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/
//
const pacients = [
  {
    name: `Thalfor`,
    idade: 35,
    peso: 80,
    altura: 1.7,
  },
  {
    name: `Caio`,
    idade: 30,
    peso: 90,
    altura: 1.75,
  },
  {
    name: `Maria`,
    idade: 25,
    peso: 60,
    altura: 1.6,
  },
  {
    name: `João`,
    idade: 20,
    peso: 85,
    altura: 1.8,
  },
];
let pacientsNomes = [];
for (let i = 0; i < pacients.length; i++) {
  pacientsNomes.push(pacients[i].name);
}
alert(pacientsNomes);
//
