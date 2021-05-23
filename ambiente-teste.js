var nome = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%-&*"
var comprimento = nome.length

let aleatorio;
let mudar1;
let mudar2;
let trocar;

for(var i=0;i<5;i++){
    aleatorio = Math.round(Math.random()*comprimento)
    mudar1 = Math.round(Math.random()*4)
    mudar2 = Math.round(Math.random()*4)
    resultado = nome[aleatorio]
    trocar =  resultado.replace(resultado[mudar1,mudar2])
    console.log(resultado)
}
