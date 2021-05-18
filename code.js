var autoral = document.getElementById('autoral')
var gerador = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%-&*"

function gerarSenha(){
    var senha = document.getElementById('senha')
    var aleatorio;
    if(senha.innerText<9){
        for(var i=0;i<=9;i++){
        aleatorio = Math.round(Math.random()*70)
        senha.innerText += gerador[aleatorio]
        }
    }else{
            senha.innerText=''
            for(var i=0;i<=9;i++){
            aleatorio = Math.round(Math.random()*69)
            senha.innerText += gerador[aleatorio]
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
