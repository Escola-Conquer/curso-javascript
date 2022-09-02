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
