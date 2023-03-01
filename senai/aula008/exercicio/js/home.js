const { id, nome } = JSON.parse(localStorage.getItem("usuario"));

const main = document.querySelector("main");
const section = document.querySelector("section");
const hello = document.querySelector("#hello");

hello.innerHTML += " " + nome;

const base = [
  {
    id: 1,
    responsavel: [
      {
        cod: "ca1423",
        endereco: "Rua das Ruas, 43",
        valor: 455000,
        comissao: 10,
      },
      {
        cod: "ap1321",
        endereco: "Rua das avenidas, 36, AP. 4",
        valor: 455000,
        comissao: 15,
      },
      {
        cod: "ap1632",
        endereco: "Rua das avenidas, 40, AP. 6",
        valor: 655000,
        comissao: 20,
      },
      {
        cod: "ca5687",
        endereco: "Rua das Ruas, 24",
        valor: 705000,
        comissao: 15,
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
        comissao: 10,
      },
      {
        cod: "ap1221",
        endereco: "Alameda dos Santos, 22, AP. 4",
        valor: 455000,
        comissao: 20,
      },
    ],
  },
];

const data = base.find((casa) => {
  return casa.id == id;
});

if (data != undefined) {
  data.responsavel.forEach((casa) => {
    criarCard(casa.cod, casa.endereco, casa.valor, casa.comissao);

    let 
  });
}

var comissaoTotal = 0;

function criarCard(cod, endereco, valor) {
  let card = document.createElement("div");
  let pcod = document.createElement("p");
  let pendereco = document.createElement("p");
  let pvalor = document.createElement("p");
  let btn = document.createElement("button");

  pcod.innerHTML = "<strong>Cod: </strong>" + cod;
  pendereco.innerHTML = endereco;
  pvalor.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
  btn.innerHTML = "Vendido";

  card.className = "card-control";

  btn.addEventListener("click", () => {
    comissaoTotal += valor;

    card.remove();
  });

  card.appendChild(pcod);
  card.appendChild(pendereco);
  card.appendChild(pvalor);
  card.appendChild(btn);

  main.appendChild(card);
}
