let usuario1 = {
    "nome":"Fulano",
    "idade": 20,
    "cadastrado":true,
    "notas":[8,5,6]
}

let usuario2 = {
    "nome":"Ciclano",
    "idade": 25,
    "cadastrado": false,
    "notas":[7,9,8] 
}

let usuarios = [];

usuarios.push(usuario1)
usuarios.push(usuario2)

console.log(usuarios)

usuarios.forEach((i)=>{
   console.log(i.nome)
});

for(let i= 0; i< usuarios.length;i++){
    console.log(usuarios[i].notas);
}

