///////////////////////////////////////////////////////////////////////////////////////////////////
/* para rodar no terminal node e o nome do código, por ex, node Aula001.js */
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Controle de fluxo da aplicação*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/*If Else*/
/*
let temperature = 37.4;
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37
if (highTemperature) {
  console.log("febre");
} else if (mediumTemperature) {
  console.log("febre moderada");
} else {
  console.log("saudável");
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Switch*/
/*
let expression = "a";
switch (expression) {
  case "a":
    console.log("a");
    break;
  case "b":
    console.log("b");
    break;
  default:
    console.log("default");
    break;
}
*/
// calculadora
/*
function calculate(number1, operator, number2) {
  let result;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      console.log("não implementado");
      break;
  }
  return result;
}
console.log(calculate(4, "+", 8));
console.log(calculate(4, "-", 8));
console.log(calculate(4, "*", 8));
console.log(calculate(4, "/", 8));
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

/*Throw e Try/Catch*/
// throw
/*
function sayMyName(name = "") {
  if (name === "") {
    throw new Error("nome é necessário"); // disparo para fora
  }
  console.log(name);
}
try {
  // tentativa
  sayMyName("Thalfor");
} catch (e) {
  // pega o lançamento do throw
  console.log(e);
}
*/
// try/catch
