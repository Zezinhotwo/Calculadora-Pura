let numeradores = ""; // Alterado para string para armazenar valores concatenados

// Classe
class Calc {
    constructor() {
        this.init();
    }

    init() {
        this.$digitos();
        this.sound = new Audio("click.mp3"); // Carregar o som apenas uma vez
    }

    $digitos() {
        const $display = document.querySelector(".result");
        document.querySelector("table").addEventListener("click", (event) => {
            // pega a this si ela tiver "td" tag cai do IF
            if (event.target.matches("td")) {
                // pega o conteudo da tag "td" alvo
                const valor = event.target.textContent;

                // Limpa o exemplo inicial ou o display se "C" for clicado
                if ($display.textContent === "2+2" || valor === "C") {
                    $display.innerText = "";
                    numeradores = ""; // Reinicia `numeradores` ao clicar em "C"
                }

                this.playSound(); // Toca o som
                if (valor !== "C") {
                    // Adiciona o valor ao display se não for "C"
                    $display.append(valor);
                    this.getValues(valor); // Chama o método getValues para armazenar o valor
                }

                console.log(valor); // Log do valor do botão clicado
            }
        });
    }

    getValues(value) {
        if (value === "=") {
            this.resultado(numeradores); // Calcula o resultado
        } else {
            // Concatena o valor clicado em `numeradores`
            numeradores += value;
            console.log(numeradores);
        }
    }

    resultado(expression) {
        let operatorIndex = 0;

        // Encontrar o índice do primeiro operador
        for (let i = 0; i < expression.length; i++) {
            if (["+", "-"].includes(expression[i])) {
                operatorIndex = i;
                break;
            }
        }

        // Dividir a expressão com base no índice do operador
        const left = Number(expression.substring(0, operatorIndex));
        const right = Number(expression.substring(operatorIndex + 1));
        const result = document.querySelector(".result");
        const operation = expression[operatorIndex];

        // Escolher a operação correta
        let resultadoFinal;
        switch (operation) {
            case "+":
                resultadoFinal = left + right;
                break;
            case "-":
                resultadoFinal = left - right;
                break;
            case "*":
                resultadoFinal = left * right;
                break;
            case "/":
                resultadoFinal = left / right;
                break;
            case "**":
                resultadoFinal = left ** right;
                break;
            default:
                alert("nao foi possivel indetificar um operador clicke em 'C'")

            break;
        }

        result.innerText = resultadoFinal; // Mostra o resultado final
        // console.log(`RESULTADO: ${left} ${operation} ${right} = ${resultadoFinal}`);
        return resultadoFinal;
    }

    playSound() {
        this.sound.currentTime = 0; // Reinicia o som para evitar atraso
        this.sound.play();
    }
}

// Instância da classe Calc
new Calc();
