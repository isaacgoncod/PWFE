const { id, nome } = JSON.parse(localStorage.getItem("usuario"));

const main = document.querySelector("main");
const pcomissao = document.querySelector("#comissao");
const hello = document.querySelector("#hello");
var comissaoTotal = 0;

hello.innerHTML += " " + nome;

const base = [
  {
    id: 1,
    responsavel: [
      {
        cod: "ca1423",
        endereco: "Rua das Ruas, 43",
        valor: 455000,
        comissao: 6,
      },
      {
        cod: "ap1321",
        endereco: "Rua das avenidas, 36, AP. 4",
        valor: 455000,
        comissao: 5,
      },
      {
        cod: "ap1632",
        endereco: "Rua das avenidas, 40, AP. 6",
        valor: 655000,
        comissao: 5,
      },
      {
        cod: "ca5687",
        endereco: "Rua das Ruas, 24",
        valor: 705000,
        comissao: 4,
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
        comissao: 7,
      },
      {
        cod: "ap1221",
        endereco: "Alameda dos Santos, 22, AP. 4",
        valor: 455000,
        comissao: 5,
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
  });
}

function criarCard(cod, endereco, valor, comissao) {
  let card = document.createElement("div");
  let pcod = document.createElement("p");
  let pendereco = document.createElement("p");
  let pvalor = document.createElement("p");
  let btn = document.createElement("button");
  let btnDelete = document.createElement("button");

  pcod.innerHTML = "<strong>Cod: </strong>" + cod;
  pendereco.innerHTML = endereco;
  pvalor.innerHTML = formatarMoeda(valor);
  btn.innerHTML = "Vendido";
  btnDelete.innerHTML = "Excluir";

  btnDelete.style.display = "none";

  btn.addEventListener("click", () => {
    comissaoTotal += Number(valor) * (comissao / 100);
    pcomissao.innerHTML = " " + formatarMoeda(comissaoTotal);
    card.style.background = "#63E17C";
    btn.remove();
    btnDelete.style.display = "block";
  });

  btnDelete.addEventListener("click", () => {
    card.remove();
  });

  card.className = "card-control";

  card.appendChild(pcod);
  card.appendChild(pendereco);
  card.appendChild(pvalor);
  card.appendChild(btn);
  card.appendChild(btnDelete);

  main.appendChild(card);
}

function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}
