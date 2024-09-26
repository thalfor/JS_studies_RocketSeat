//
let resultado = Number(
  prompt("Adivinhe o número que estou pensando, está entre 0 e 10.")
);
let i = 1;
const match = Math.ceil(Math.random() * 10);
while (resultado !== match) {
  resultado = Number(prompt("errooooou! Tente novamente!"));
  i++;
}
if (resultado === match) {
  alert(`miserável é um gênio! Só foram ${i} tentativas`);
}
//
