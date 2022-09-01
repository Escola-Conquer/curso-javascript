/*
- Insira alguns elementos dinamicamente:
- Campo inserção de texto (tipo: text)
- Três botões
- Elemento de texto
- Elemento de caixa de seleção (tipo: checkbox)
- O primeiro botão, deverá adicionar um elemento à lista com o texto presente no campo de inserção de texto somente se o mesmo não estiver vazio.
- Após a adição do elemento, o campo de inserção de texto deve ficar vazio.
- O segundo botão deverá contar os itens da lista e exibir o resultado no elemento de texto.
- A caixa de seleção, servirá para indicar se o elemento deve ser adicionado ao topo, ou ao final da lista. (Se estiver marcado, adicionar ao topo)
- O terceiro botão deve excluir o último elemento da lista.

ALGUMAS RESPOSTAS POSSÍVEIS:
*/

const body = document.querySelector("body")
const list = document.querySelector("ul")

const inputValue = document.createElement("input")
inputValue.setAttribute("type", "text")

const checkbox = document.createElement("input")
checkbox.setAttribute("type", "checkbox")

const listLength = document.createElement("span")
listLength.innerHTML = "Total de itens: 4"

const removeButton = document.createElement("button")
removeButton.innerHTML = "Remover"

removeButton.addEventListener("click", () => {
    list.removeChild(list.lastElementChild)
})

const addButton = document.createElement("button")
addButton.innerHTML = "Adicionar"

addButton.addEventListener("click", () => {
    const valor = inputValue.value

    if (valor !== "") {
        const novoElemento = document.createElement("li")
        novoElemento.innerHTML = valor

        if (checkbox.checked) {
            list.prepend(novoElemento)
        } else {
            list.appendChild(novoElemento)
        }
        
        inputValue.value = ""
    }
})

const countButton = document.createElement("button")
countButton.innerHTML = "Contar"

countButton.addEventListener("click", () => {
    const quantidade = document.querySelectorAll("li")
    listLength.innerHTML = `Total de itens: ${quantidade.length}`
})

body.appendChild(listLength)
body.appendChild(checkbox)
body.appendChild(inputValue)
body.appendChild(addButton)
body.appendChild(countButton)
body.appendChild(removeButton)