// Para participar dos campeonatos os competidores preenchem um formulário com sua data de nascimento, crie uma função que receba o ano de nascimento e retorne a idade do competidor.

const anoAtual = 2023;
let anoDeNascimento = prompt("Digite o ano de seu nascimento:");

function idade(anoDeNascimento){
  return anoAtual - anoDeNascimento;
}

alert("Sua idade é de: " + idade(anoDeNascimento) + " anos");

