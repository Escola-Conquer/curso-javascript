/*  - Crie um formulário, a partir do DOM, com os seguintes inputs(caso queira incluir mais inputs, fique a vontade) :
    Nome
    Sobrenome
    E-mail
    Número
    Gênero
    Checkbox para salvar as informações
    Checkbox com os Termos de Uso
    Botão para envio
  - Para conseguir enviar as informações, valide todos os inputs necessários, inclusive os checkboxs.
  - Imprima os valores dos itens “a” ao “e”, caso haja mais inputs que tenha adicionado, imprima-os também.
  - Crie um alert para os itens criados.
  
  
  ALGUMAS POSSÍVEIS RESPOSTAS
  
  function nomeDaFunção() {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  div.setAttribute('id', 'container');
  const form = document.createElement('form');
  form.setAttribute('id', 'form');
  
  body.appendChild(div);
  div.appendChild(form);
}

nomeDaFunção();

const form = document.getElementById('form');

function nomeDaFunção() {
  let inputName = document.createElement('input');
  inputName.setAttribute('placeholder', 'Nome');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');
  inputName.id = 'name';
  
  let inputLastName = document.createElement('input');
  inputLastName.setAttribute('placeholder', 'Sobrenome');
  inputLastName.setAttribute('type', 'text');
  inputLastName.setAttribute('name', 'lastname');
  inputLastName.id = 'last-name';
  
  let inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'E-mail');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('name', 'email');
  inputEmail.id = 'email';
  
  let inputNumber = document.createElement('input');
  inputNumber.setAttribute('placeholder', 'Whatsapp');
  inputNumber.setAttribute('type', 'text');
  inputNumber.setAttribute('name', 'whatsapp');
  inputNumber.id = 'whatsapp';
  
  let inputGender = document.createElement('input');
  inputGender.setAttribute('placeholder', 'Gênero');
  inputGender.setAttribute('type', 'text');
  inputGender.setAttribute('name', 'gender');
  inputGender.id = 'gender';
  
  let checkboxSave = document.createElement('input');
  checkboxSave.setAttribute('type', 'checkbox');
  checkboxSave.id = 'save';
  let labelSave = document.createElement('label');
  labelSave.setAttribute('for', 'save');
  labelSave.innerText = 'Salvar informações';
  labelSave.append(checkboxSave);
  
  let checkboxTerms = document.createElement('input');
  checkboxTerms.setAttribute('type', 'checkbox');
  checkboxTerms.id = 'terms';
  let labelTerms = document.createElement('label');
  labelTerms.setAttribute('for', 'save');
  labelTerms.innerText = 'Termos de Uso';
  labelTerms.append(checkboxTerms);
  
  
  let btnSubmit = document.createElement('input');
  btnSubmit.setAttribute('type', 'submit');
  btnSubmit.setAttribute('value', 'Enviar');
  btnSubmit.id = 'submit';
  
  form.append(
    inputName,
    inputLastName,
    inputEmail,
    inputNumber,
    inputGender,
    checkboxSave,
    labelSave,
    labelTerms,
    checkboxTerms,
    btnSubmit
    );
  }
  
  nomeDaFunção();
  
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nome = document.getElementById('name');
    let sobrenome = document.getElementById('last-name');
    let email = document.getElementById('email');
    let whatsapp = document.getElementById('whatsapp');
    let genero = document.getElementById('gender');
    let checkSave = document.getElementById('save');
    let checkTerms = document.getElementById('terms');
    
    if (nome.value == '') {
      alert('Preencha o campo nome');
      nome.focus();
      return false;
    }
    if (sobrenome.value == '') {
      alert('Preencha o campo sobrenome');
    sobrenome.focus();
    return false;
  }
  if (email.value == '') {
    alert('Preencha o campo email');
    email.focus();
    return false;
  }
  if (whatsapp.value == '') {
    alert('Preencha o campo whatsapp');
    whatsapp.focus();
    return false;
  }
  if (genero.value == '') {
    alert('Preencha o campo gênero');
    genero.focus();
    return false;
  }
  
  if (!checkSave.checked) {
    alert('Marque o checkbox para Salvar as informações')
    checkSave.focus();
    return false;
  }
  
  if (!checkTerms.checked) {
    alert('Marque o checkbox de Termos de Uso')
    checkSave.focus();
    return false;
  }
  
  alert(JSON.stringify({
    nome: form.name.value,
    sobrenome: form.lastname.value,
    email: form.email.value,
    whatsapp: form.whatsapp.value,
    genero: form.gender.value
  }))
  
  console.log({
    nome: form.name.value,
    sobrenome: form.lastname.value,
    email: form.email.value,
    whatsapp: form.whatsapp.value,
    genero: form.gender.value
  })
  
  form.name.value = '';
  form.lastname.value = '';
  form.email.value = '';
  form.whatsapp.value = '';
  form.gender.value = ''; 
})
// */
