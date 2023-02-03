let body = document.querySelector("body");

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

destinos.forEach((destino) => {
  let banner = document.createElement("div");
  banner.className = "banner";
  banner.style.backgroundImage = `url(${destino.imagem})`;

  let dest = document.createElement("h1");
  dest.innerHTML = destino.destino;

  let desc = document.createElement("p");
  desc.innerHTML = destino.descricao;

  banner.appendChild(dest);
  banner.appendChild(desc);

  body.appendChild(banner);
});
