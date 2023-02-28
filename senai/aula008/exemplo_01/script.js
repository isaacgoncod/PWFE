const inpEmail = document.querySelector("#email");
const inpSenha = document.querySelector("#senha");

function autenticar() {
  let email = inpEmail.value;
  let senha = inpSenha.value;

  fetch("http://hostapi.com:3000/login")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });

  if (email == "isaac@gmail.com" && senha == "12345") {
    alert("Login com Sucesso!!");
  } else {
    alert("Login Inválido");
  }
}
