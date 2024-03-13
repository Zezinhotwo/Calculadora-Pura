//criar as funcoes da operaçoes basicas
//tres variaveis uma para cada operacao 
// Duas variavel para os numeros e uma para o resultado do operador  
//crie um funcao q receba dois valores pra executa a funcao 
const num = document.querySelectorAll('.bnt-num');
const operadores = document.querySelectorAll(".bnt-log");
const tela = document.querySelector(".visor");
const clear = document.getElementById("clear");
const clear1 = document.getElementById("clear1");
const result = document.getElementById("result");

let aux = [];

num.forEach((numero) => {
    numero.addEventListener("click", () => {
        aux.push(numero.value);
        tela.innerText = aux.join("");
    });
});

operadores.forEach((operador) => {
    operador.addEventListener("click", () => {
        aux.push(operador.value);
        tela.innerText = aux.join("");
    });
});

clear.addEventListener("click", () => {
    aux.splice(0);
    tela.innerText = "";
});

clear1.addEventListener("click", () => {
    aux.pop();
    tela.innerText = aux.join("");
});

result.addEventListener("click", () => {
    let result = aux;
    if (result.find(index => index == "+")) {
        let resulM = result.filter(index => index != "+").map(index => Number(index))

        console.log(Adicao(resulM))
        tela.innerText = `${Adicao(resulM)}`;
    }
    else if (result.find(index => index == "-")) {
        let resulS = result.filter(index => index != "-").map(index => Number(index))

        console.log(subtracao(resulS))
        tela.innerText = `${subtracao(resulS)}`;
    }


    function Adicao(numero1) {

        return numero1.reduce((soma, indexAtual) => soma + indexAtual, 0)
    }
    function subtracao(numero1) {
        
        return numero1.map(index => Number(index) - Number(index))
    }

});
//soma
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




