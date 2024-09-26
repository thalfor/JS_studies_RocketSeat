///////////////////////////////////////////////////////////////////////////////////////////////////
/* para rodar no terminal node e o nome do código, por ex, node Aula001.js */
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Prototype*/
/*
prototype-based language
prototype chain
__proto__
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/*Type conversion typecasting // implícito // coersion // forçando na mão*/
/*
console.log("9" + 5); // transforma tipo number para tipo string // type coersion
console.log(Number("9") + 5); // type conversion
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*String em números*/
/*
let string = "123";
console.log(Number(string));
let number = 321;
console.log(String(number));
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*contando caracteres e dígitos*/
/*
let word = "paralelepipedo";
console.log(word.length);
let number = 1234;
console.log(String(number).length);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*casas decimais*/
/*
let number = 28345.9378645;
console.log(number.toFixed(0));
console.log(number.toFixed(2));
console.log(number.toFixed(2).replace(".", ","));
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*maiúsculas e minúsculas*/
/*
let word = "BlaBlaBla";
console.log(word.toUpperCase());
console.log(word.toLowerCase());
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*separando strings*/
/*
let phrase = "eu quero viver o Amor!";
let myArray = phrase.split(" ");
console.log(myArray);
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*encontrando palavras em frases*/
/*
let phrase = "eu quero viver o Amor!";
console.log(phrase.includes("amor"));
console.log(phrase.toUpperCase().includes("amor"));
console.log(phrase.includes("Amor"));
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*criando array com construtor*/
/*
let myArray = new Array("a", "b", "c");
let myArray2 = new Array(10);
console.log(myArray);
console.log(myArray2);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*elementos do array*/

//console.log(["a", "b", "c"].length);

///////////////////////////////////////////////////////////////////////////////////////////////////

/*strings para arrays*/
/*
let word = "manupulação";
console.log(Array.from(word));
console.log(Array.from(word).length);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*manipulando arrays*/

//let techs = ["html", "css", "js"];
//techs.push("nodejs"); // adiciona ao final
//console.log(techs);
//techs.unshift("sql"); // adiciona ao início
//console.log(techs);
//techs.pop(); // remove do final
//console.log(techs);
//techs.shift(); // remove do começo
//console.log(techs);
//console.log(techs.slice(1, 3)); // onde começa (começando do zero) e até onde vai (contando a partir de 1)
//techs.splice(1, 2); // qual posição de onde tirar e quantos tirar
//console.log(techs);
//let index = techs.indexOf("css");
//console.log(index);
//techs.splice(index, 1);
//console.log(techs);
