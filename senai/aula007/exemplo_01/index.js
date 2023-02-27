const body = document.querySelector("body");

const arr = [5, 8, 7, 10, 2, 6, 5, 2, 10];

arr.forEach((item, indice) => {
  let calc = item * 2;

  let texto = document.createElement("p");

  //<p>10<p/>
  texto.innerHTML = `${item} X 2 = ${calc}`;

  body.appendChild(texto);
});

//map, filter, find

const novoArr = arr.map((item, indice) => {
  let calc = item * 2;

  let texto = document.createElement("h3");
  texto.innerHTML = calc;

  return texto;
});

const filterArr = arr.filter((item, indice) => {
  return item >= 5 && item <= 10;
});

const data = arr.find((item, indice) => {
  return item == 5;
});

const info = [
  {
    nome: "Isaac",
    matricula: 12345,
    vendas: 5,
  },
  {
    nome: "Gustavo",
    matricula: 54312,
    vendas: 10,
  },
  {
    nome: "Bruno",
    matricula: 56789,
    vendas: 8,
  },
];

const metaVendas = 7;

const vendedores = info.filter((valor) => {
  return valor.vendas >= 7;
});

const vendedor = info.find((data) => {
  return data.matricula == 54312;
});

console.log(vendedor.nome)
