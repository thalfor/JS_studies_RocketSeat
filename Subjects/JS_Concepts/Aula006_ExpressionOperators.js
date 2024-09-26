///////////////////////////////////////////////////////////////////////////////////////////////////
/* para rodar no terminal node e o nome do código, por ex, node Aula001.js */
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Expressões e operadores*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/*New*/
// left-hand-side expression
/*
let name = new String("Thalfor");
name.surName = "santos";
let age = new Number(35);
console.log(name, age);
console.log(name.surName, age);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Typeof delete*/
/*
console.log(typeof "thalfor");
const person = {
  name: "thalfor",
  age: 25,
};
console.log(person);
delete person.age;
console.log(person);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Operadores aritméticos*/
/*
console.log(2 * 4);
console.log(8 / 2);
console.log(3 + 5);
console.log(5 - 2);
let remainder = 11 % 3;
console.log(remainder);
let increment = 0;
increment++; // sempre incrementa após
console.log(increment);
let decrement = 1;
decrement--;
console.log(decrement); // sempre decrementa após
console.log(2 ** 3);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Grouping operator*/
/*
let total1 = 2 + 3 * 5;
console.log(total1);
let total2 = (2 + 3) * 5;
console.log(total2);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Operadores de comparação igual e diferente*/
/*
let one = 1;
let two = 2;
console.log(two == 1);
console.log(one == 2);
console.log(one == "1");
console.log(one == two);
console.log(one != two);
console.log(one != 1);
console.log(one != "1");
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Operadores de comparação igual e estritamente diferente*/
/*
let one = 1;
let two = 2;
console.log(one === "1");
console.log(one === 1);
console.log(two !== "2");
console.log(two !== 2);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Operadores de comparação maior e menor (igual)*/
/*
let one = 1;
let two = 2;
console.log(one > two);
console.log(one >= 1);
console.log(two >= 1);
console.log(one < two);
console.log(one <= two);
console.log(one <= 1);
console.log(one <= 0);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Operadores de atribuição*/
/*
let x;
console.log(x);
x = 1;
console.log(x);
x += 2;
console.log(x);
x -= 1;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);
x %= 2;
console.log(x);
x **= 2;
console.log(x);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Operadores lógicos*/

// and &&&
// or ||
// not !
/*
let pao = true;
let queijo = true;
console.log(pao && queijo);
console.log(pao || queijo);
console.log(!pao);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Operador condicional ternário*/

// condition ? value1 : value2
/*
let pao = false;
let queijo = true;
const niceBreakfast = pao && queijo ? "Café show" : "Zoado";
console.log(niceBreakfast);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Operadores para string*/
/*
console.log("a" == "b");
console.log("a" == "a");
console.log("a" + "a");
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Falsy e truthy*/
/*
False
0
-0
""
null
undefined
NaN
*/
/*
Truthy
{}
[]
1
3.23
"0"
-1
Infinity
-Infinity
*/
/*
console.log(0 ? "verdadeiro" : "falso");
console.log(-0 ? "verdadeiro" : "falso");
console.log(null ? "verdadeiro" : "falso");
console.log({} ? "verdadeiro" : "falso");
console.log("0" ? "verdadeiro" : "falso");
console.log(-Infinity ? "verdadeiro" : "falso");
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Precedência dos operadores*/
/*
grouping ()
negação e incremento ! ++ --
multiplicação divisão * /
adição e subtração + -
relacional < <= > >=
igualdade == != === !==
and &&
or ||
condicional ?:
assignment = += -= *=
*/
