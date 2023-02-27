const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

function autenticar() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((usuarios) => {
      let usuario = usuarios.find((valor, i) => {
        return valor.email == email.value && valor.username == senha.value;
      });

      if (usuario != undefined) {
        document.location.href = "./index.html";
      } else {
        alert("Usuário ou senha inválidos");
      }
    });
}
