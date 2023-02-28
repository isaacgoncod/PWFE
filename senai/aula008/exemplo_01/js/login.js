const inpEmail = document.querySelector("#email");
const inpSenha = document.querySelector("#senha");

const base = [
  {
    email: "isaac@gmail.com",
    senha: "1234",
    nome: "Isaac",
    id: 1,
  },
  {
    email: "gustavo@gmail.com",
    senha: "1234",
    nome: "Gustavo",
    id: 2,
  },
  {
    email: "joao@gmail.com",
    senha: "1234",
    nome: "João",
    id: 3,
  },
];

function autenticar() {
  let email = inpEmail.value;
  let senha = inpSenha.value;

  let usuario = base.find((user) => {
    return user.email == email && user.senha == senha;
  });

  if (usuario != undefined) {
    let info = {
      id: usuario.id,
      nome: usuario.nome,
    };

    localStorage.setItem("usuario", JSON.stringify(info));

    window.location.href = "./home.html";
  } else {
    alert("SAI FORA");
  }
}

// let infoUsuario = {
//   email: email,
//   senha: senha,
// };

// let options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(infoUsuario),
// };

// fetch("http://hostapi.com:3000/login", options)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data = {
//       id: 1,
//       username: "Isaac",
//       role: "Gerente",
//     };
//     console.log(data);
//   });

// if (email == "isaac@gmail.com" && senha == "12345") {
//   let info = {
//     username: "Isaac",
//     userId: 5,
//   };

//   localStorage.setItem("userdata", JSON.stringify(info));

//   window.location.href = "./home.html";
// } else {
//   alert("Login Inválido");
// }
