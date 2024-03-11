//criar as funcoes da operaçoes basicas
//tres variaveis uma para cada operacao 
// Duas variavel para os numeros e uma para o resultado do operador  
//crie um funcao q receba dois valores pra executa a funcao 
const num = document.querySelectorAll('.bnt-num');
const operadores = document.querySelectorAll(".bnt-log")
const tela = document.querySelector(".visor");
const clear = document.getElementById("clear")

let i = 0;
let aux = [];
num.forEach((numero) => {
    numero.addEventListener("click", () => {
        console.log(numero.value)
        // aux.push(numero)
        if (aux.length < 10) {
            aux.push(numero.value)
            tela.innerText = aux.join("")
            console.log(aux)
        } else if (aux.length >= 10) alert("capacidade maxima de '10' Numero ")
        // console.log(i)

    })
})
operadores.forEach((operandos) => {
    operandos.addEventListener("click", () => {
        aux.push(operandos.value)
        tela.innerText =aux.join("")
    })
})
clear.addEventListener("click",()=>{
      tela.innerContent=aux.pop()
      tela.innerText = aux.join("")
})


//adicao

function Adicao(numero1, numero2) {
    return numero1 + numero2
}

//subtracao

function subtracao(numero1, numero2) {
    return numero1 - numero2
}

//multiplicacao

function multiplicacao(numero1, numero2) {
    return numero1 * numero2
}


//divisao

function divisao(numero1, numero2) {
    return numero1 / numero2
}
// console.log(divisao(2, 4))
// console.log(multiplicacao(2, 4))
// console.log(subtracao(2, 4))
// console.log(Adicao(2, 4))




