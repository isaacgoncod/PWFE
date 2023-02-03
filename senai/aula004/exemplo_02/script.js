let banner = document.querySelector(".banner");
let destino = document.querySelector("#destino");
let descricao = document.querySelector("#descricao");

let destinos = [
  {
    imagem:
      "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg",
    destino: "Brazil",
    descricao: "Planos a partir de $1000.00",
  },
  {
    imagem:
      "https://www.cvccorp.com.br/fronteiras/wp-content/uploads/2021/06/Nova-York-Estados-Unidos-shutterstock_646338262.jpg",
    destino: "USA",
    descricao: "Curta as férias com a família",
  },
  {
    imagem:
      "https://blog.kangaroo.com.br/wp-content/uploads/2020/04/capa-egito.jpg",
    destino: "Egito",
    descricao: "Conheça as pirâmides",
  },
];

function gerarNumero(size) {
  return Math.floor(Math.random() * size);
}

function atualizarDados() {
  let indice = gerarNumero(destinos.length);

  banner.style.backgroundImage = `url(${destinos[indice].imagem})`;
  destino.innerHTML = destinos[indice].destino;
  descricao.innerHTML = destinos[indice].descricao;
}
