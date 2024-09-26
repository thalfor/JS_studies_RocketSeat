//
let nome = prompt("qual é o seu nome?");
let notaOne = Number(prompt("qual é a primeira nota?"));
let notaTwo = Number(prompt("qual é a segunda nota?"));
let notaThree = Number(prompt("qual é a terceira nota?"));
let media = (notaOne + notaTwo + notaThree) / 3;
media = media.toFixed(2);
if (media >= 6) {
  alert(`Parabéns ${nome}, sua média é de ${media} e você passou.`);
} else {
  alert(
    `${nome} você precisa estudar mais. Sua média é de ${media} e você não passou.`
  );
}
//
