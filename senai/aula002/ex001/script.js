// Ana Maria, precisa de dinheiro e decidiu fazer uma rifa de sua bicicleta. Para ajudar Ana maria crie uma função que receba como parâmetro um vetor de 10 nomes e sorteie um aleatóriamente.

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
  "Roberto"
];

function sortearNomes(nomes) {
  let sortedNomes = Math.floor(Math.random() * nomes.length);
  return nomes[sortedNomes];
}

console.log(sortearNomes(nomes));

