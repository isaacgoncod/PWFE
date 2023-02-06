const tabelaPrincipal = document.querySelector("#tabela-principal");
const tabelaVendas = document.querySelector("#tabela-vendas");

const dados = [
  {
    funcionario: "Vitoria da Cruz",
    matricula: "010203",
    setor: "Eletronico",
    comissao: 5,
    vendas: [
      {
        data: "03/02/2023",
        valor: 1250.0,
      },
      {
        data: "03/02/2023",
        valor: 899.0,
      },
      {
        data: "04/02/2023",
        valor: 5999.9,
      },
    ],
  },
  {
    funcionario: "Cecilia Martins",
    matricula: "124578",
    setor: "Eletronico",
    comissao: 5,
    vendas: [
      {
        data: "15/01/2023",
        valor: 3290.9,
      },
      {
        data: "16/01/2023",
        valor: 1320.99,
      },
      {
        data: "16/02/2023",
        valor: 990.9,
      },
    ],
  },
  {
    funcionario: "Joaquim Souza",
    matricula: "124578",
    setor: "Moveis",
    comissao: 12,
    vendas: [
      {
        data: "08/01/2023",
        valor: 4500.0,
      },
      {
        data: "08/01/2023",
        valor: 599.99,
      },
      {
        data: "09/01/2023",
        valor: 259.9,
      },
    ],
  },
];

dados.forEach((dado) => {
  let tr = document.createElement("tr");

  let tdMatricula = document.createElement("td");
  tdMatricula.innerHTML = dado.matricula;

  let tdFuncionario = document.createElement("td");
  tdFuncionario.innerHTML = dado.funcionario;

  let tdSetor = document.createElement("td");
  tdSetor.innerHTML = dado.setor;

  let tdComissao = document.createElement("td");
  tdComissao.innerHTML = dado.comissao;

  tabelaPrincipal.appendChild(tr);
  tr.appendChild(tdMatricula);
  tr.appendChild(tdFuncionario);
  tr.appendChild(tdSetor);
  tr.appendChild(tdComissao);
});

let valorTotal = 0;
for (let i = 0; i < dados.vendas; i++) {
  valorTotal += dados.vendas.valor[i];
}
let tdTotalVenda = document.createElement("td");
tdTotalVenda.innerHTML = valorTotal;

console.log(valorTotal);
