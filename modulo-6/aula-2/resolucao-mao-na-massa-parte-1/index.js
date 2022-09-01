/*
- Escreva um script que retorne no as informações do usuário (username e password) em uma única linha, como no exemplo:

Exemplos: 

"Usuário: John Doe, Senha: minhasenha"
"A senha do usuário John Doe é minhasenha"

**

ALGUMAS RESPOSTAS POSSÍVEIS:
*/

const userName = document.querySelector("#username").value
const userPassword = document.querySelector("#userpassword").value
console.log(`Usuário: ${userName}, Senha: ${userPassword}`)

// const userName = document.querySelector("#username")
// const userPassword = document.querySelector("#userpassword")
// console.log("A senha do usuário " + userName.value + " é " + userPassword.value)