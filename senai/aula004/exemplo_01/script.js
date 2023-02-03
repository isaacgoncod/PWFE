let paragrafo = document.querySelector("p");

// console.log(paragrafo.innerHTML);

// paragrafo.innerHTML = "Novo Texto";

let inputNome = document.querySelector("#nome");

let foto = document.querySelector("#foto");
let descricao = document.querySelector("#descricao");

function mostrarNome() {
  let valor = inputNome.value;

  let data = {
    nome: valor,
  };

  paragrafo.innerHTML = JSON.stringify(data);
  // paragrafo.innerHTML = data.nome;
}

function atualizarDados() {
  let info = {
    descricao: "Um Panda Feliz",
    imagem: [
      "https://grupocataratas.com/wp-content/uploads/2020/07/Instagram-Feed-1024x1024.png",
      "https://super.abril.com.br/wp-content/uploads/2017/03/preto-no-branco-a-explicac3a7c3a3o-cientc3adfica-para-as-cores-do-panda.png?w=1024&resize=1200,800",
    ],
  };

  descricao.innerHTML = info.descricao;
  foto.src = info.imagem[gerarNumero()];
}

function gerarNumero() {
  return Math.floor(Math.random() * 2);
}
