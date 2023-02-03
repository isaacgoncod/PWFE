let body = document.querySelector("body");

let produtos = [
  {
    imagem: "./assets/geladeira.webp",
    nome: "Geladeira",
    preco: "R$ 1500,00",
  },
  {
    imagem: "./assets/tv4k.jpg",
    nome: "TV 4K",
    preco: "R$ 5000,00",
  },
  {
    imagem: "./assets/fogao.webp",
    nome: "Fogão",
    preco: "R$ 800,00",
  },
];

produtos.forEach((produto) => {
  let card = document.createElement("div");
  card.className = "card";

  let imagem = document.createElement("img");
  imagem.src = produto.imagem;

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let nome = document.createElement("p");
  nome.innerHTML = produto.nome;

  let preco = document.createElement("p");
  preco.innerHTML = produto.preco;

  let botao = document.createElement("button");
  botao.innerHTML = "Comprar"

  body.appendChild(card);
  card.appendChild(imagem);
  card.appendChild(cardBody);
  cardBody.appendChild(nome);
  cardBody.appendChild(preco);
  cardBody.appendChild(botao);
});
