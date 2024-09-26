///////////////////////////////////////////////////////////////////////////////////////////////////
/* para rodar no terminal node e o nome do código, por ex, node Aula001.js */
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Funções*/

// criar um aplicativo de frases motivacionais

// declaration // function statement
/*
function createPhrases() {
  console.log("Estudar é muito bom");
  console.log("blalbalbabla");
  console.log("ble ble ble ble");
}
*/
// executar a função // rodar // chamar // invocar // execute // run // call // invoke
/*
createPhrases();
createPhrases();
createPhrases();
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/*Argumentos da função*/

// function expression // function anonymous
// parameters
/*
let total = 0;
const somar = function (number1, number2) {
  let total = number1 + number2;
  return total;
};
somar(2, 3); // arguments
somar(4, 5);

let number1 = 34;
let number2 = 25;
somar(number1, number2);
console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${somar(number1, number2)}`);
console.log(total);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/*Function Scope*/
/*
let subject = "create video";

function createThink(subject) {
  subject = "study";
  return subject;
}
console.log(subject);
console.log(createThink(subject));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/*Function Hoisting*/
/*
sayMyName();
function sayMyName() {
  console.log("Thalfor");
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/*Arrow Function*/
/*
const sayMyName = () => {
  console.log("Thalfor");
};
sayMyName();
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/*Callback Function*/
/*
function sayMyName(name) {
  console.log("antes da callback");
  name();
  console.log("depois da callback");
}
sayMyName(() => {
  console.log("estou em uma callback");
});
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/*Funções construtoras*/
// function constructor
/*
expressão new
criar um novo objeto
this keyword
*/
// maiúsculo é boa prática
/*
function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " está andando";
  };
}
const thalfor = new Person("Thalfor");
console.log(thalfor);
console.log(thalfor.walk());
*/
