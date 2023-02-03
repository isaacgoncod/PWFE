// Ana maria precisa de mais precisão no cálculo da idade, então crie uma função que receba dia, mês e ano de nascimento e retorne a idade do competidor.

const anoAtual = 2023;
let anoDeNascimento = prompt("Digite o ano de seu nascimento:");

function idade(anoDeNascimento){
  return anoAtual - anoDeNascimento;
}

alert("Sua idade é de: " + idade(anoDeNascimento) + " anos");

