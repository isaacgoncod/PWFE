// Em alguns casos a rifa poderá ter mais de um ganhador então crie uma função que receba como parâmetro um vetor de 10 nomes e um total de quantos deseja sortear, e mostre na tela estes nomes sorteados.

let nomes = [
  "Isaac",
  "Melissa",
  "Gustavo",
  "Bruno",
  "Gabriel",
  "João",
  "Felipe",
  "Maria",
  "Anna",
  "Roberto",
];

function sortearNomes(nomes) {
  let sortedNomes = Math.floor(Math.random() * nomes.length);
  return nomes[sortedNomes];
}

let qtd = prompt("Digite a quantidade de nomes para sorteio: ");
for (let i = 0; i < qtd; i++) {
  console.log(sortearNomes(nomes));
}

