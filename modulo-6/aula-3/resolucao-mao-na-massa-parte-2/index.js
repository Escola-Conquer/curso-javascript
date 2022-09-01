/*
- Escreva uma função que realize a soma dos valores dos dois primeiros campos e retorne o resultado no terceiro

Parte 1:
*/

// let first = document.getElementById("firstValue")
// let second = document.getElementById("secondValue")
// let result = document.querySelector("#result")

// const calc = () => {
//     result.value = parseInt(first.value) + parseInt(second.value)
// }

/*

Parte 2:
- Altere o HTML para que o elemento "button" execute a função ao ser clicado

Altere no arquivo HTML, inserindo atributo onclick na tag button:
<button class="btn" onclick="calc()">Calcular</button>

*/

/*

Parte 3:
- Remova a alteração anterior e faça o botão executar a função somente através do script

*/

let first = document.getElementById("firstValue")
let second = document.getElementById("secondValue")
let button = document.querySelector(".btn")
let result = document.querySelector("#result")

button.addEventListener("click", () => {
    result.value = parseInt(first.value) + parseInt(second.value)
})