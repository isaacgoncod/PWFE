// getElementById(id)
// getElementsByTagName(tag)
// getElementsByClassName(class)
// querySelector("")
// querySelectorAll("")
// #id
// .class
// tag

// let titulo = document.getElementById("titulo");
// console.log(titulo);

// let titulos = document.getElementsByTagName("h1");
// console.log(titulos);

// let textos = document.getElementsByClassName("texto");
// console.log(textos);

// let titulo = document.querySelector("#titulo");
// console.log(titulo);

// let texto = document.querySelector(".texto");
// console.log(titulo);

// let titulos = document.querySelectorAll(".texto");
// console.log(titulos);

// paragrafo.style.color = "red";
// paragrafo.style.fontSize = "2rem";
// let paragrafo = document.querySelector("p");
// console.log(paragrafo.innerHTML);

// paragrafo.innerHTML = "A informaçao que eu quiser";

// paragrafo.classList.add("m1");
// paragrafo.classList.remove("m1");

// let body = document.querySelector("body");
// body.className = "dark light";

// console.log(body.classList);

// body.classList.toggle("m1");

// let dados = document.querySelectorAll("p");

// dados.forEach((i) => {
//   console.log(i.innerHTML);
// });

// console.log(dados);

let pNome = document.querySelector("#nome");
let pEndereco = document.querySelector("#endereco");
let pTelefone = document.querySelector("#telefone");
let pNascimento = document.querySelector("#nascimento");

let dados = {
  "nome":pNome.innerHTML,
  "endereco":pEndereco.innerHTML,
  "telefone":pTelefone.innerHTML,
  "nascimento":pNascimento.innerHTML
}
console.log(dados);

let info={
  "nome":"Isaac",
  "endereco": "Avenida das Rua",
  "telefone": "1998432448",
  "nascimento": "05/05/2002"
};

pNome.innerHTML = info.nome;
pEndereco.innerHTML = info.endereco;
pTelefone.innerHTML = info.telefone;
pNascimento.innerHTML = info.nascimento;


let nomeProd = document.querySelector("#nomeProd");
let descricaoProd = document.querySelector("#descricaoProd");
let valorProd = document.querySelector("#valorProd");

let produto1 = {
  "nome":nomeProd.innerHTML,
  "descricao" : descricaoProd.innerHTML,
  "valor":valorProd.innerHTML
}
console.log(produto1);

let produto2 = {
  "nome":"limão",
  "descricao" : "azedo",
  "valor":"1.99"
}

nomeProd.innerHTML = produto2.nome;
descricaoProd.innerHTML = produto2.descricao;
valorProd.innerHTML = produto2.valor;
