/*
- Crie um script, para obter o resultado mostrado nas imagens a seguir:

- Dicas (Cores, medidas em "rem", ...):
#264653
#2A9D8F
#FCFCFC
#E76F51
sans-serif
10rem
1rem
2rem
5rem

CÓDIGO HTML: https://i.ibb.co/7nn5tFP/HTML.png
RESULTADO: https://i.ibb.co/thxQQc0/desafio.png

ALGUMAS RESPOSTAS POSSÍVEIS:
*/

const body = document.querySelector("body")
const button = document.createElement("button")

button.innerHTML = "Alterar Estilos"
body.append(button)

button.addEventListener("click", () => {
    body.style.backgroundColor = "#264653"

    document.title = "Desafio de Estilos"

    const newDiv = document.createElement("div")
    newDiv.style.width = "10rem"
    newDiv.style.borderWidth = "1rem"
    newDiv.style.borderStyle = "solid"
    newDiv.style.borderRadius = "2rem"
    newDiv.style.borderColor = "#E76F51"
    newDiv.style.padding =  "5rem"
    newDiv.style.backgroundColor = "#2A9D8F"

    const textElement = document.createElement("h1")
    textElement.innerHTML = "Desafio de Estilos"
    textElement.style.color = "#FCFCFC"
    textElement.style.fontFamily = "sans-serif"

    newDiv.appendChild(textElement)
    body.appendChild(newDiv)  

    body.removeChild(button)

})

