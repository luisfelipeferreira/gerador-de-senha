var autoral = document.getElementById('autoral')
var geradorMinuscula = "abcdefghijklmnopqrstuvwxyz"
var geradorMaiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var geradorNumero = "0123456789"
var geradorSimbolo = "!@#$%-&*"

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

function gerarSenha(){
    var senha = document.getElementById('senha')
    var aleatorioMinuscula;
    var aleatorioMaiuscula;
    var aleatorioNumero;
    var aleatorioSimbolo;
    var resultado;
    if(senha.innerText.length<=7){
        for(var i=1;i<=2;i++){
            aleatorioMinuscula = Math.round(Math.random()*(geradorMinuscula.length-1))
            senha.innerText += geradorMinuscula[aleatorioMinuscula]

            aleatorioMaiuscula = Math.round(Math.random()*(geradorMaiuscula.length-1))
            senha.innerText += geradorMaiuscula[aleatorioMaiuscula]

            aleatorioNumero = Math.round(Math.random()*(geradorNumero.length-1))
            senha.innerText += geradorNumero[aleatorioNumero]
            
            aleatorioSimbolo = Math.round(Math.random()*(geradorSimbolo.length-1))
            senha.innerText += geradorSimbolo[aleatorioSimbolo]
            senha.innerText = shuffle(senha.innerText)
        }
    }else{
            senha.innerText=''
            for(var i=1;i<=2;i++){
                aleatorioMinuscula = Math.round(Math.random()*(geradorMinuscula.length-1))
                senha.innerText += geradorMinuscula[aleatorioMinuscula]

                aleatorioMaiuscula = Math.round(Math.random()*(geradorMaiuscula.length-1))
                senha.innerText += geradorMaiuscula[aleatorioMaiuscula]

                aleatorioNumero = Math.round(Math.random()*(geradorNumero.length-1))
                senha.innerText += geradorNumero[aleatorioNumero]

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
