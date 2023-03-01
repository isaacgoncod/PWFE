const { id, nome } = JSON.parse(localStorage.getItem("usuario"));

const main = document.querySelector("main");
const hello = document.querySelector("#hello");

hello.innerHTML += nome;

const base = [
  {
    id: 1,
    responsavel: [
      {
        cod: "ca1423",
        endereco: "Rua das Ruas, 43",
        valor: 455000,
      },
      {
        cod: "ap1321",
        endereco: "Rua das avenidas, 36, AP. 4",
        valor: 455000,
      },
    ],
  },
  {
    id: 2,
    responsavel: [
      {
        cod: "ca3321",
        endereco: "Rua sem calçada, 59",
        valor: 455000,
      },
      {
        cod: "ap1221",
        endereco: "Alameda dos Santos, 22, AP. 4",
        valor: 455000,
      },
    ],
  },
];

const data = base.find((casa) => {
  return casa.id == id;
});

if (data != undefined) {
  data.responsavel.forEach((casa) => {
    criarCard(casa.cod, casa.endereco, casa.valor, casa.status);
  });
}

function criarCard(cod, endereco, valor) {
  let card = document.createElement("div");
  let pcod = document.createElement("p");
  let pendereco = document.createElement("p");
  let pvalor = document.createElement("p");
  let btn = document.createElement("button");

  pcod.innerHTML = cod;
  pendereco.innerHTML = endereco;
  pvalor.innerHTML = valor;
  btn.innerHTML = "Vendido";

  card.className = "card-control";

  card.appendChild(pcod);
  card.appendChild(pendereco);
  card.appendChild(pvalor);
  card.appendChild(btn);

  main.appendChild(card);
}
