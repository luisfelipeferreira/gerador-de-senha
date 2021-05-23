var nome = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%-&*"
var comprimento = nome.length

let aleatorio = Math.round(Math.random()*comprimento)

console.log(nome[aleatorio])

