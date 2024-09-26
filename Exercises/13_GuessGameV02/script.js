//
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let match = Math.round(Math.random() * 10);
let i = 1;
//
//eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick());
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});
//
//funções
function handleTryClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");
  if (Number(inputNumber.value) == match) {
    toggleScreen();
    screen2.querySelector("h2").innerText = `acertou em ${i} tentativas`;
  }
  inputNumber.value = "";
  i++;
}
//
function handleResetClick() {
  toggleScreen();
  i = 1;
  match = Math.round(Math.random() * 10);
}
//
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
//
