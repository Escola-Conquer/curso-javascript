const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log({
    nome: form.nome.value,
    email: form.email.value,
    telefone: form.telefone.value,
    experiencia: form.experiencia.value,
    vaga: form.vaga.value,
    linguagens: form.linguagens.value,
    portfolio: form.portfolio.value,
    apresentacao: form.apresentacao.value,
    arquivo: form.arquivo.value,
  })

  alert("Dados enviados com sucesso!")

  form.nome.value = ""
  form.email.value = ""
  form.telefone.value = ""
  form.experiencia.value = ""
  form.vaga.value = "Vaga"
  form.linguagens.value = "Linguagens de programação"
  form.portfolio.value = ""
  form.apresentacao.value = ""
  form.arquivo.value = ""
})

// Botão de subir
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const button = document.createElement("button")

button.setAttribute("type", "button")
button.setAttribute("onclick", "scrollToTop()")
button.className = "btn btn-danger position-fixed bottom-0 end-0 m-5"
button.id = "top-button"
button.appendChild(document.createTextNode("Ir para o topo"))

window.onscroll = () => {
  if (window.scrollY > 300) {
    document.body.appendChild(button)

    return
  }

  if (document.getElementById("top-button")) {
    document.body.removeChild(button)
  }
}
