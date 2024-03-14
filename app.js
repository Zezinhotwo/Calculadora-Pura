//criar as funcoes da operaçoes basicas
//tres variaveis uma para cada operacao 
// Duas variavel para os numeros e uma para o resultado do operador  
//crie um funcao q receba dois valores pra executa a funcao 
// Seleciona o elemento de exibição e todos os botões
const display = document.querySelector(".display");
const botoes = document.querySelectorAll(".botoes");

let saidas = [];



// Itera sobre cada botão
botoes.forEach(botao => {
    botao.addEventListener("click", (event) => {
            const valorDoBotao = event.target.innerText;

        if (valorDoBotao === "C") {
            // Limpa o array saidas
            saidas = [];
        
            // Limpa o display
            display.innerText = "";
        } else if (valorDoBotao === "<") {
            // Remove o último elemento do array saidas
            saidas.pop();
        
            // Exibe a saída atual no display
            display.innerText = saidas.join("");
        } else if (valorDoBotao === "=") {
            // Realiza o cálculo com base nas operações presentes no array saidas
            const resultado = calcularResultado(saidas);
        
            // Exibe o resultado no display
            display.innerText = resultado;
        } else {
            // Adiciona o valor do botão ao array de saídas
            saidas.push(valorDoBotao);
        
            // Exibe a saída atual no display
            display.innerText = saidas.join("");
        }
        
        function calcularResultado(saidas) {
            let resultado = 0;
            let operador = "+";
        
            for (const valor of saidas) {
                if (isNaN(valor)) {
                    operador = valor;
                } else {
                    switch (operador) {
                        case "+":
                            resultado += parseFloat(valor);
                            break;
                        case "-":
                            resultado -= parseFloat(valor);
                            break;
                        case "x":
                            resultado *= parseFloat(valor);
                            break;
                        case "/":
                            resultado /= parseFloat(valor);
                            break;
                    }
                }
            }
        
            return resultado;
        }
        
    });
});

