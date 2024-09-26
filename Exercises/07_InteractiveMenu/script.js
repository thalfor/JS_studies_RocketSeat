/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/
//
/*
let itens = [];
let option;

while (option != 3) {
  option = Number(
    prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `)
  );
  if (option == 1) {
    itemLista = prompt(`Digite o nome o ítem:`);
    itens.push(itemLista);
  } else if (option == 2) {
    if (itens.length == 0) {
      alert(`Não existem ítens na lista`);
    } else {
      alert(itens);
    }
  } else if (option != 3) {
    alert(`Não existe essa opção.`);
  } else {
    alert(`Tchau.`);
  }
}
  */
//
let itens = [];
let option;
while (option != 3) {
  option = Number(
    prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `)
  );
  switch (option) {
    case 1:
      itens.push(prompt(`Digite o nome o ítem:`));
      break;
    case 2:
      if (itens.length == 0) {
        alert(`Não existem ítens na lista`);
      } else {
        alert(itens);
      }
      break;
    case 3:
      alert(`Tchau.`);
      break;
    default:
      alert(`Opção inválida.`);
  }
}
//
