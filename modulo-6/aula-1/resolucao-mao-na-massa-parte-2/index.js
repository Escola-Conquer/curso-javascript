// - Escreva um script que retorne a quantidade de elementos com a tag "span" no console:

// ALGUMAS RESPOSTAS POSSÍVEIS:
const elemento1 = document.querySelectorAll("div")
console.log(elemento1.length) // 3

//console.log(document.getElementsByTagName("div").length) // 3

// - Escreva um script que selecione o segundo elemento com a tag "span" e retorne no console "Texto 2" que é seu conteúdo de texto:

// ALGUMAS RESPOSTAS POSSÍVEIS:
const elemento2 = document.querySelectorAll("span")[1]
console.log(elemento2.textContent)

// const elemento2 = document.getElementsByTagName("span")[1]
// console.log(elemento2.textContent)

// - Escreva um script que selecione o elemento com a tag "input" e retorne no console seu valor ("john doe"):

// ALGUMAS RESPOSTAS POSSÍVEIS:
const elemento3 = document.querySelector("#username")
console.log(elemento3.value)

// const elemento3 = document.getElementById("username")
// console.log(elemento3.value)