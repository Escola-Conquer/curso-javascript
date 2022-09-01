// Atribua o seletor correto à constante 'Element' para obter o retorno "DIV" no console:

const elemento1 = document.querySelector("div")
console.log(elemento1.tagName)

// ALGUMAS RESPOSTAS POSSÍVEIS:
// document.querySelector("div")

// document.querySelector("div.box")

// document.querySelector(".box")

// document.querySelectorAll("div")[0]

// document.querySelectorAll("div.box")[0]

// document.querySelectorAll(".box")[0]

// document.getElementsByTagName("div")[0]

// document.getElementsByClassName("box")[0]


// Atribua o seletor correto à constante 'Element' para obter o retorno "Título" no console:

const elemento2 = document.querySelector("h1#title")

console.log(elemento2.textContent)

// ALGUMAS RESPOSTAS POSSÍVEIS:
// document.querySelector("h1#title")

// document.querySelector("#title")

// document.querySelector("h1")

// document.querySelectorAll("h1")[0]

// document.querySelectorAll("h1#title")[0]

// document.querySelectorAll("#title")[0]

// document.getElementById("title")

// document.getElementsByTagName("h1")[0]

// Atribua o seletor correto à constante 'Element' para obter o retorno "Subtítulo" no console:

const elemento3 = document.querySelector("h2")
console.log(elemento3.textContent)

// ALGUMAS RESPOSTAS POSSÍVEIS:
// document.querySelector("h2")

// document.querySelectorAll("h2")[0]

// document.getElementsByTagName("h2")[0]