///////////////////////////////////////////////////////////////////////////////////////////////////
/* para rodar no terminal node e o nome do código, por ex, node Aula001.js */
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Declaration assignment var*/
/*
let name, age, isHuman;
name = "Thalfor";
age = 35;
isHuman = true;
console.log(name, age, isHuman);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
console.log("o Thalfor tem 35 anos");
console.log("o " + name + " tem " + age + " anos");
console.log(`o ${name} tem ${age} anos`);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
const person = {
  name: "Thalfor",
  age: 35,
  weight: 80,
  isAdmin: true,
};
console.log(person);
console.log(person.name);
console.log(`o ${person.name} tem ${person.age} anos`);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
const animals = [
  "lion",
  "monkey",
  {
    name: "cat",
    age: 3,
  },
];
console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals.length);
console.log(animals[3]);
console.log(animals[2].name);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

//1 - declare uma variável de nome weight
//let weight;

//2 - qua tipo de dado é a variável acima?
//console.log(typeof weight);

/*
3 - declare uma variável a atribua valores para cada um dos dados:
  name: string
  age: number (integer)
  stars: number (float)
  isSubscribed: boolean
*/
/*
let name, age, stars, isSubscribed;
name = "Thalfor";
age = 35;
stars = 1.8;
isSubscribed = true;
*/
/*
4 - a variável student abaixo é de que tipo de dados?
4.1 - atribua a ela as mesmas propriedades e valores do exercício 3.
4.2 - mostre no console a seguinte mensagem:
  <name> de idade <age> pesa <weight> kg.
*/
let student = {};
//console.log(typeof student);
student = {
  name: "Thalfor",
  age: 35,
  weight: 80,
  isSubscribed: true,
};
/*
console.log(student);
console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
);
*/

//5 - declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.
let students = [];

//6 - reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
students = [student];

//7 - coloque no console o valor da posição zero do array acima.
//console.log(students[0]);

//8 - crie um novo student e coloque na posição 1 do array students.
const john = {
  name: "John",
  age: 30,
  weight: 70,
  isSubscribed: true,
};
students[1] = john;
console.log(students);
