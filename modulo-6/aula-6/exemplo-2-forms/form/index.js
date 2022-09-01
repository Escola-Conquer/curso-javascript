function createForms() {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  div.setAttribute('id', 'container');
  const form = document.createElement('form');
  form.setAttribute('id', 'form');

  body.appendChild(div);
  div.appendChild(form);
}

createForms();

const container = document.getElementById('container');
const form = document.getElementById('form');

function styleContainer() {
  container.style.height = '100vh';
  container.style.width = '100vw';
  container.style.display = 'flex';
  container.style.flexDirection = 'row';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
}

styleContainer();

function styleForm() {
  form.style.height = '500px';
  form.style.width = '500px';
  form.style.backgroundColor = '#f6f5f3';
  form.style.border = '5px solid yellow';
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.textAlign = 'center';
  form.style.justifyContent = 'center';
  form.style.alignItems = 'center';
}

styleForm();

function createInputs() {
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

  let inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Senha');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('name', 'password');
  inputPassword.id = 'password';
  
  let btnSubmit = document.createElement('input');
  btnSubmit.setAttribute('type', 'submit');
  btnSubmit.setAttribute('value', 'Enviar');
  btnSubmit.id = 'submit';
  
  form.append(
    inputName,
    inputLastName,
    inputEmail,
    inputNumber,
    inputPassword,
    btnSubmit
  );
}

createInputs();

function styleInputs() {
  let inputs = document.getElementsByTagName('input');

  inputs.item(0).style.margin = '10px';
  inputs.item(1).style.margin = '10px';
  inputs.item(2).style.margin = '10px';
  inputs.item(3).style.margin = '10px';
  inputs.item(4).style.margin = '10px';
  inputs.item(5).style.margin = '10px';
}

styleInputs();

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let nome = document.getElementById('name');
  let sobrenome = document.getElementById('last-name');
  let email = document.getElementById('email');
  let whatsapp = document.getElementById('whatsapp');
  let senha = document.getElementById('password');

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
  if (senha.value == '') {
    alert('Preencha o campo senha');
    senha.focus();
    return false;
  }

  alert(JSON.stringify({
    nome: form.name.value,
    sobrenome: form.lastname.value,
    email: form.email.value,
    whatsapp: form.whatsapp.value,
    senha: form.password.value
  }))

  console.log({
    nome: form.name.value,
    sobrenome: form.lastname.value,
    email: form.email.value,
    whatsapp: form.whatsapp.value,
    senha: form.password.value
  })

  form.name.value = '';
  form.lastname.value = '';
  form.email.value = '';
  form.whatsapp.value = '';
  form.password.value = ''; 
})