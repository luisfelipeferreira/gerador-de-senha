var autoral = document.getElementById('autoral')
var geradorMinuscula = "abcdefghijklmnopqrstuvwxyz"
var geradorMaiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var geradorNumero = "0123456789"
var geradorSimbolo = "!@#$%-&*"

function gerarSenha(){
    var senha = document.getElementById('senha')
    var aleatorioMinuscula;
    var aleatorioMaiuscula;
    var aleatorioNumero;
    var aleatorioSimbolo;
    if(senha.innerText.length<=7){
        for(var i=1;i<=3;i++){
        aleatorioMinuscula = Math.round(Math.random()*(geradorMinuscula.length-1))
        senha.innerText += geradorMinuscula[aleatorioMinuscula]
        }
        for(var j=1;j<=3;j++){
            aleatorioMaiuscula = Math.round(Math.random()*(geradorMaiuscula.length-1))
            senha.innerText += geradorMaiuscula[aleatorioMaiuscula]
        }
        for(var k=1;k<=1;k++){
            aleatorioNumero = Math.round(Math.random()*(geradorNumero.length-1))
            senha.innerText += geradorNumero[aleatorioNumero]
        }
        for(var l=1;l<=1;l++){
            aleatorioSimbolo = Math.round(Math.random()*(geradorSimbolo.length-1))
            senha.innerText += geradorSimbolo[aleatorioSimbolo]
        }
    }else{
            senha.innerText=''
            for(var i=1;i<=3;i++){
                aleatorioMinuscula = Math.round(Math.random()*(geradorMinuscula.length-1))
                senha.innerText += geradorMinuscula[aleatorioMinuscula]
                }
                for(var j=1;j<=3;j++){
                    aleatorioMaiuscula = Math.round(Math.random()*(geradorMaiuscula.length-1))
                    senha.innerText += geradorMaiuscula[aleatorioMaiuscula]
                }
                for(var k=1;k<=1;k++){
                    aleatorioNumero = Math.round(Math.random()*(geradorNumero.length-1))
                    senha.innerText += geradorNumero[aleatorioNumero]
                }
                for(var l=1;l<=1;l++){
                    aleatorioSimbolo = Math.round(Math.random()*(geradorSimbolo.length-1))
                    senha.innerText += geradorSimbolo[aleatorioSimbolo]
                }
        }
    }

function foraImg(){
    autoral.hidden = true
}

function dentro(){
    autoral.hidden = false
}

function carregar(){
    autoral.hidden = true
}
