const display = document.getElementById("display")
const buttons = document.querySelectorAll(".buttons button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value// value -> vem de data-value (números e operadores) 
        const action = button.dataset.action// action -> vem de data-action (AC e =) 

        
        if (display.innerText === "Erro") {
            display.innerText = "0";
        }

        // se o botão clicado tiver um valor (número ou operador)
        if (value) {
            const operadores = ["+", "-", "*", "/"];
            const ultimo = display.innerText.slice(-1);

            //caso seja "." ele entra
            if (value === ".") {

                // se vier "." depois de operador -> vira "0."
                if (operadores.includes(ultimo)) {
                    display.innerText += "0.";
                    return;
                }

                // evitar mais de um ponto no mesmo número
                const ultimoNumero = display.innerText.split(/[\+\-\*\/]/).pop();
                if (ultimoNumero.includes(".")) {
                    return;
                }
            }

            //verifica se o botão clicado é um operador
            if (operadores.includes(value)) {

                //verifica se o ultimo caracter do display é um operador
                if (operadores.includes(ultimo)) {
                    return;
                }
            }

            //verifica se oque está no display é igual a "0" e o valor clicado é diferente de "." para substituir o "0" inicial por um número
            if (display.innerText === "0" && value !== ".") {
                display.innerText = value;
            } else {
                display.innerText += value;
            }

        } else if (action) {

            //limpa o que estava no innerText e deixa como "0"
            if (action === "clear") {
                display.innerText = "0";

                //soma o que está no innerText ex:("30+1"), pega TEXTO e executa como código    
            } else if (action === "equals") {

                const operadores = ["+", "-", "*", "/"];
                const ultimo = display.innerText.slice(-1);

                // evitar calcular com expressão incorreta
                if (operadores.includes(ultimo)) {
                    return;
                }

                // calcula a expressão do display (ex: "30+1")
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Erro";
                }
            }
        }
    })

})
